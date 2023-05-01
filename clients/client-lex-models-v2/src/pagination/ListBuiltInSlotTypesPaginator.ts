// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListBuiltInSlotTypesCommand,
  ListBuiltInSlotTypesCommandInput,
  ListBuiltInSlotTypesCommandOutput,
} from "../commands/ListBuiltInSlotTypesCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: LexModelsV2Client,
  input: ListBuiltInSlotTypesCommandInput,
  ...args: any
): Promise<ListBuiltInSlotTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBuiltInSlotTypesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListBuiltInSlotTypes(
  config: LexModelsV2PaginationConfiguration,
  input: ListBuiltInSlotTypesCommandInput,
  ...additionalArguments: any
): Paginator<ListBuiltInSlotTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBuiltInSlotTypesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof LexModelsV2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LexModelsV2 | LexModelsV2Client");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
