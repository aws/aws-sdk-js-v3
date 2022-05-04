// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  BatchGetAssetPropertyAggregatesCommand,
  BatchGetAssetPropertyAggregatesCommandInput,
  BatchGetAssetPropertyAggregatesCommandOutput,
} from "../commands/BatchGetAssetPropertyAggregatesCommand";
import { IoTSiteWise } from "../IoTSiteWise";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: BatchGetAssetPropertyAggregatesCommandInput,
  ...args: any
): Promise<BatchGetAssetPropertyAggregatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new BatchGetAssetPropertyAggregatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTSiteWise,
  input: BatchGetAssetPropertyAggregatesCommandInput,
  ...args: any
): Promise<BatchGetAssetPropertyAggregatesCommandOutput> => {
  // @ts-ignore
  return await client.batchGetAssetPropertyAggregates(input, ...args);
};
export async function* paginateBatchGetAssetPropertyAggregates(
  config: IoTSiteWisePaginationConfiguration,
  input: BatchGetAssetPropertyAggregatesCommandInput,
  ...additionalArguments: any
): Paginator<BatchGetAssetPropertyAggregatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: BatchGetAssetPropertyAggregatesCommandOutput;
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
