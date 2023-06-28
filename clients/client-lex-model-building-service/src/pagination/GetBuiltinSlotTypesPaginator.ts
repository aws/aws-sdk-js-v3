// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetBuiltinSlotTypesCommand,
  GetBuiltinSlotTypesCommandInput,
  GetBuiltinSlotTypesCommandOutput,
} from "../commands/GetBuiltinSlotTypesCommand";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: LexModelBuildingServiceClient,
  input: GetBuiltinSlotTypesCommandInput,
  ...args: any
): Promise<GetBuiltinSlotTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetBuiltinSlotTypesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetBuiltinSlotTypes(
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetBuiltinSlotTypesCommandInput,
  ...additionalArguments: any
): Paginator<GetBuiltinSlotTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetBuiltinSlotTypesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof LexModelBuildingServiceClient) {
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
