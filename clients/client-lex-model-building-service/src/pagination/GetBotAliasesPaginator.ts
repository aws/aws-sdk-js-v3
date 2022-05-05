// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetBotAliasesCommand,
  GetBotAliasesCommandInput,
  GetBotAliasesCommandOutput,
} from "../commands/GetBotAliasesCommand";
import { LexModelBuildingService } from "../LexModelBuildingService";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LexModelBuildingServiceClient,
  input: GetBotAliasesCommandInput,
  ...args: any
): Promise<GetBotAliasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetBotAliasesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LexModelBuildingService,
  input: GetBotAliasesCommandInput,
  ...args: any
): Promise<GetBotAliasesCommandOutput> => {
  // @ts-ignore
  return await client.getBotAliases(input, ...args);
};
export async function* paginateGetBotAliases(
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetBotAliasesCommandInput,
  ...additionalArguments: any
): Paginator<GetBotAliasesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetBotAliasesCommandOutput;
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
