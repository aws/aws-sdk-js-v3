// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetBuiltinIntentsCommand,
  GetBuiltinIntentsCommandInput,
  GetBuiltinIntentsCommandOutput,
} from "../commands/GetBuiltinIntentsCommand";
import { LexModelBuildingService } from "../LexModelBuildingService";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LexModelBuildingServiceClient,
  input: GetBuiltinIntentsCommandInput,
  ...args: any
): Promise<GetBuiltinIntentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetBuiltinIntentsCommand(input), ...args);
};
/**
 * @private
 */
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
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
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
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
