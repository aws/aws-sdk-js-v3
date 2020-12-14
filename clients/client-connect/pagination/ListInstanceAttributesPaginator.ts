import { Connect } from "../Connect";
import { ConnectClient } from "../ConnectClient";
import {
  ListInstanceAttributesCommand,
  ListInstanceAttributesCommandInput,
  ListInstanceAttributesCommandOutput,
} from "../commands/ListInstanceAttributesCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListInstanceAttributesCommandInput,
  ...args: any
): Promise<ListInstanceAttributesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInstanceAttributesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Connect,
  input: ListInstanceAttributesCommandInput,
  ...args: any
): Promise<ListInstanceAttributesCommandOutput> => {
  // @ts-ignore
  return await client.listInstanceAttributes(input, ...args);
};
export async function* paginateListInstanceAttributes(
  config: ConnectPaginationConfiguration,
  input: ListInstanceAttributesCommandInput,
  ...additionalArguments: any
): Paginator<ListInstanceAttributesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInstanceAttributesCommandOutput;
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
