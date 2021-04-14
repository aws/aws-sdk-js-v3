import { ConfigService } from "../ConfigService";
import { ConfigServiceClient } from "../ConfigServiceClient";
import {
  ListStoredQueriesCommand,
  ListStoredQueriesCommandInput,
  ListStoredQueriesCommandOutput,
} from "../commands/ListStoredQueriesCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: ListStoredQueriesCommandInput,
  ...args: any
): Promise<ListStoredQueriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStoredQueriesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: ListStoredQueriesCommandInput,
  ...args: any
): Promise<ListStoredQueriesCommandOutput> => {
  // @ts-ignore
  return await client.listStoredQueries(input, ...args);
};
export async function* paginateListStoredQueries(
  config: ConfigServicePaginationConfiguration,
  input: ListStoredQueriesCommandInput,
  ...additionalArguments: any
): Paginator<ListStoredQueriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStoredQueriesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ConfigService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
