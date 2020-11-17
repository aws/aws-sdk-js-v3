import { LexModelBuildingService } from "../LexModelBuildingService";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import { GetIntentsCommand, GetIntentsCommandInput, GetIntentsCommandOutput } from "../commands/GetIntentsCommand";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: LexModelBuildingServiceClient,
  input: GetIntentsCommandInput,
  ...args: any
): Promise<GetIntentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetIntentsCommand(input), ...args);
};
const makePagedRequest = async (
  client: LexModelBuildingService,
  input: GetIntentsCommandInput,
  ...args: any
): Promise<GetIntentsCommandOutput> => {
  // @ts-ignore
  return await client.getIntents(input, ...args);
};
export async function* paginateGetIntents(
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetIntentsCommandInput,
  ...additionalArguments: any
): Paginator<GetIntentsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetIntentsCommandOutput;
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
