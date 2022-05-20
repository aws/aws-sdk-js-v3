// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListAssetsCommand, ListAssetsCommandInput, ListAssetsCommandOutput } from "../commands/ListAssetsCommand";
import { IoTSiteWise } from "../IoTSiteWise";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: ListAssetsCommandInput,
  ...args: any
): Promise<ListAssetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTSiteWise,
  input: ListAssetsCommandInput,
  ...args: any
): Promise<ListAssetsCommandOutput> => {
  // @ts-ignore
  return await client.listAssets(input, ...args);
};
export async function* paginateListAssets(
  config: IoTSiteWisePaginationConfiguration,
  input: ListAssetsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssetsCommandOutput;
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
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
