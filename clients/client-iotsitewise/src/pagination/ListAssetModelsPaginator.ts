// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAssetModelsCommand,
  ListAssetModelsCommandInput,
  ListAssetModelsCommandOutput,
} from "../commands/ListAssetModelsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: ListAssetModelsCommandInput,
  ...args: any
): Promise<ListAssetModelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssetModelsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAssetModels(
  config: IoTSiteWisePaginationConfiguration,
  input: ListAssetModelsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssetModelsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssetModelsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTSiteWiseClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTSiteWise | IoTSiteWiseClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
