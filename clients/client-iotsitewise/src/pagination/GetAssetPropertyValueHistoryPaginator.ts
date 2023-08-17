// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetAssetPropertyValueHistoryCommand,
  GetAssetPropertyValueHistoryCommandInput,
  GetAssetPropertyValueHistoryCommandOutput,
} from "../commands/GetAssetPropertyValueHistoryCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: GetAssetPropertyValueHistoryCommandInput,
  ...args: any
): Promise<GetAssetPropertyValueHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetAssetPropertyValueHistoryCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetAssetPropertyValueHistory(
  config: IoTSiteWisePaginationConfiguration,
  input: GetAssetPropertyValueHistoryCommandInput,
  ...additionalArguments: any
): Paginator<GetAssetPropertyValueHistoryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetAssetPropertyValueHistoryCommandOutput;
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
