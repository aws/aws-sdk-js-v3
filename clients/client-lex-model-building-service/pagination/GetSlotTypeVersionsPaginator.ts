import { LexModelBuildingService } from "../LexModelBuildingService";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import {
  GetSlotTypeVersionsCommand,
  GetSlotTypeVersionsCommandInput,
  GetSlotTypeVersionsCommandOutput,
} from "../commands/GetSlotTypeVersionsCommand";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LexModelBuildingServiceClient,
  input: GetSlotTypeVersionsCommandInput,
  ...args: any
): Promise<GetSlotTypeVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetSlotTypeVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LexModelBuildingService,
  input: GetSlotTypeVersionsCommandInput,
  ...args: any
): Promise<GetSlotTypeVersionsCommandOutput> => {
  // @ts-ignore
  return await client.getSlotTypeVersions(input, ...args);
};
export async function* paginateGetSlotTypeVersions(
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetSlotTypeVersionsCommandInput,
  ...additionalArguments: any
): Paginator<GetSlotTypeVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetSlotTypeVersionsCommandOutput;
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
