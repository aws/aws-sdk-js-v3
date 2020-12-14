import { Connect } from "../Connect";
import { ConnectClient } from "../ConnectClient";
import {
  ListApprovedOriginsCommand,
  ListApprovedOriginsCommandInput,
  ListApprovedOriginsCommandOutput,
} from "../commands/ListApprovedOriginsCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListApprovedOriginsCommandInput,
  ...args: any
): Promise<ListApprovedOriginsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListApprovedOriginsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Connect,
  input: ListApprovedOriginsCommandInput,
  ...args: any
): Promise<ListApprovedOriginsCommandOutput> => {
  // @ts-ignore
  return await client.listApprovedOrigins(input, ...args);
};
export async function* paginateListApprovedOrigins(
  config: ConnectPaginationConfiguration,
  input: ListApprovedOriginsCommandInput,
  ...additionalArguments: any
): Paginator<ListApprovedOriginsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListApprovedOriginsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Connect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
