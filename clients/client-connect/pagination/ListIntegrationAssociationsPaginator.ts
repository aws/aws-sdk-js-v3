import { Connect } from "../Connect";
import { ConnectClient } from "../ConnectClient";
import {
  ListIntegrationAssociationsCommand,
  ListIntegrationAssociationsCommandInput,
  ListIntegrationAssociationsCommandOutput,
} from "../commands/ListIntegrationAssociationsCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListIntegrationAssociationsCommandInput,
  ...args: any
): Promise<ListIntegrationAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIntegrationAssociationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Connect,
  input: ListIntegrationAssociationsCommandInput,
  ...args: any
): Promise<ListIntegrationAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.listIntegrationAssociations(input, ...args);
};
export async function* paginateListIntegrationAssociations(
  config: ConnectPaginationConfiguration,
  input: ListIntegrationAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListIntegrationAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIntegrationAssociationsCommandOutput;
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
