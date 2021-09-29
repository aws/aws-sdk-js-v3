import { ConfigService } from "../ConfigService";
import { ConfigServiceClient } from "../ConfigServiceClient";
import {
  GetDiscoveredResourceCountsCommand,
  GetDiscoveredResourceCountsCommandInput,
  GetDiscoveredResourceCountsCommandOutput,
} from "../commands/GetDiscoveredResourceCountsCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: GetDiscoveredResourceCountsCommandInput,
  ...args: any
): Promise<GetDiscoveredResourceCountsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetDiscoveredResourceCountsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: GetDiscoveredResourceCountsCommandInput,
  ...args: any
): Promise<GetDiscoveredResourceCountsCommandOutput> => {
  // @ts-ignore
  return await client.getDiscoveredResourceCounts(input, ...args);
};
export async function* paginateGetDiscoveredResourceCounts(
  config: ConfigServicePaginationConfiguration,
  input: GetDiscoveredResourceCountsCommandInput,
  ...additionalArguments: any
): Paginator<GetDiscoveredResourceCountsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetDiscoveredResourceCountsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof ConfigService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
