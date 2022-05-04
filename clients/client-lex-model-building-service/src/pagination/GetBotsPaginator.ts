// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { GetBotsCommand, GetBotsCommandInput, GetBotsCommandOutput } from "../commands/GetBotsCommand";
import { LexModelBuildingService } from "../LexModelBuildingService";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LexModelBuildingServiceClient,
  input: GetBotsCommandInput,
  ...args: any
): Promise<GetBotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetBotsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LexModelBuildingService,
  input: GetBotsCommandInput,
  ...args: any
): Promise<GetBotsCommandOutput> => {
  // @ts-ignore
  return await client.getBots(input, ...args);
};
export async function* paginateGetBots(
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetBotsCommandInput,
  ...additionalArguments: any
): Paginator<GetBotsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetBotsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof LexModelBuildingService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LexModelBuildingServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LexModelBuildingService | LexModelBuildingServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
