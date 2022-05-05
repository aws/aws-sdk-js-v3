// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  BatchGetAssetPropertyValueCommand,
  BatchGetAssetPropertyValueCommandInput,
  BatchGetAssetPropertyValueCommandOutput,
} from "../commands/BatchGetAssetPropertyValueCommand";
import { IoTSiteWise } from "../IoTSiteWise";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: BatchGetAssetPropertyValueCommandInput,
  ...args: any
): Promise<BatchGetAssetPropertyValueCommandOutput> => {
  // @ts-ignore
  return await client.send(new BatchGetAssetPropertyValueCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTSiteWise,
  input: BatchGetAssetPropertyValueCommandInput,
  ...args: any
): Promise<BatchGetAssetPropertyValueCommandOutput> => {
  // @ts-ignore
  return await client.batchGetAssetPropertyValue(input, ...args);
};
export async function* paginateBatchGetAssetPropertyValue(
  config: IoTSiteWisePaginationConfiguration,
  input: BatchGetAssetPropertyValueCommandInput,
  ...additionalArguments: any
): Paginator<BatchGetAssetPropertyValueCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: BatchGetAssetPropertyValueCommandOutput;
  while (hasNext) {
    input.nextToken = token;
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
