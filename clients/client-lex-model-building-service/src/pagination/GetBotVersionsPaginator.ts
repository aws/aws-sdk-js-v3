// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetBotVersionsCommand,
  GetBotVersionsCommandInput,
  GetBotVersionsCommandOutput,
} from "../commands/GetBotVersionsCommand";
import { LexModelBuildingService } from "../LexModelBuildingService";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LexModelBuildingServiceClient,
  input: GetBotVersionsCommandInput,
  ...args: any
): Promise<GetBotVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetBotVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LexModelBuildingService,
  input: GetBotVersionsCommandInput,
  ...args: any
): Promise<GetBotVersionsCommandOutput> => {
  // @ts-ignore
  return await client.getBotVersions(input, ...args);
};
export async function* paginateGetBotVersions(
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetBotVersionsCommandInput,
  ...additionalArguments: any
): Paginator<GetBotVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetBotVersionsCommandOutput;
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
