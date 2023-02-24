// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  BatchGetRumMetricDefinitionsCommand,
  BatchGetRumMetricDefinitionsCommandInput,
  BatchGetRumMetricDefinitionsCommandOutput,
} from "../commands/BatchGetRumMetricDefinitionsCommand";
import { RUM } from "../RUM";
import { RUMClient } from "../RUMClient";
import { RUMPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RUMClient,
  input: BatchGetRumMetricDefinitionsCommandInput,
  ...args: any
): Promise<BatchGetRumMetricDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new BatchGetRumMetricDefinitionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RUM,
  input: BatchGetRumMetricDefinitionsCommandInput,
  ...args: any
): Promise<BatchGetRumMetricDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.batchGetRumMetricDefinitions(input, ...args);
};
export async function* paginateBatchGetRumMetricDefinitions(
  config: RUMPaginationConfiguration,
  input: BatchGetRumMetricDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<BatchGetRumMetricDefinitionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: BatchGetRumMetricDefinitionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof RUM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RUMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RUM | RUMClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
