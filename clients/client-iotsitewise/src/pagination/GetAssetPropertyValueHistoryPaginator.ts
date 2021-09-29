import { IoTSiteWise } from "../IoTSiteWise";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import {
  GetAssetPropertyValueHistoryCommand,
  GetAssetPropertyValueHistoryCommandInput,
  GetAssetPropertyValueHistoryCommandOutput,
} from "../commands/GetAssetPropertyValueHistoryCommand";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: IoTSiteWise,
  input: GetAssetPropertyValueHistoryCommandInput,
  ...args: any
): Promise<GetAssetPropertyValueHistoryCommandOutput> => {
  // @ts-ignore
  return await client.getAssetPropertyValueHistory(input, ...args);
};
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
    if (config.client instanceof IoTSiteWise) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTSiteWiseClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTSiteWise | IoTSiteWiseClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
