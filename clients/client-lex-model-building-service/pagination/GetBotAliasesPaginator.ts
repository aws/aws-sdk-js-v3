import { LexModelBuildingService } from "../LexModelBuildingService";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import {
  GetBotAliasesCommand,
  GetBotAliasesCommandInput,
  GetBotAliasesCommandOutput,
} from "../commands/GetBotAliasesCommand";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: LexModelBuildingServiceClient,
  input: GetBotAliasesCommandInput,
  ...args: any
): Promise<GetBotAliasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetBotAliasesCommand(input), ...args);
};
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
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
