import { LexModelBuildingService } from "../LexModelBuildingService";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import { GetBotsCommand, GetBotsCommandInput, GetBotsCommandOutput } from "../commands/GetBotsCommand";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: LexModelBuildingServiceClient,
  input: GetBotsCommandInput,
  ...args: any
): Promise<GetBotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetBotsCommand(input), ...args);
};
const makePagedRequest = async (
  client: LexModelBuildingService,
  input: GetBotsCommandInput,
  ...args: any
): Promise<GetBotsCommandOutput> => {
  // @ts-ignore
  return await client.getBots(input, ...args);
};
export async function* getBotsPaginate(
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetBotsCommandInput,
  ...additionalArguments: any
): Paginator<GetBotsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
