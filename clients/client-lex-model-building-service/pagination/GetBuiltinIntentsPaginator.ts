import { LexModelBuildingService } from "../LexModelBuildingService";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import {
  GetBuiltinIntentsCommand,
  GetBuiltinIntentsCommandInput,
  GetBuiltinIntentsCommandOutput,
} from "../commands/GetBuiltinIntentsCommand";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: LexModelBuildingServiceClient,
  input: GetBuiltinIntentsCommandInput,
  ...args: any
): Promise<GetBuiltinIntentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetBuiltinIntentsCommand(input), ...args);
};
const makePagedRequest = async (
  client: LexModelBuildingService,
  input: GetBuiltinIntentsCommandInput,
  ...args: any
): Promise<GetBuiltinIntentsCommandOutput> => {
  // @ts-ignore
  return await client.getBuiltinIntents(input, ...args);
};
export async function* paginateGetBuiltinIntents(
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetBuiltinIntentsCommandInput,
  ...additionalArguments: any
): Paginator<GetBuiltinIntentsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetBuiltinIntentsCommandOutput;
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
