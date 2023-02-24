// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeGlobalClustersCommand,
  DescribeGlobalClustersCommandInput,
  DescribeGlobalClustersCommandOutput,
} from "../commands/DescribeGlobalClustersCommand";
import { Neptune } from "../Neptune";
import { NeptuneClient } from "../NeptuneClient";
import { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: NeptuneClient,
  input: DescribeGlobalClustersCommandInput,
  ...args: any
): Promise<DescribeGlobalClustersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeGlobalClustersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Neptune,
  input: DescribeGlobalClustersCommandInput,
  ...args: any
): Promise<DescribeGlobalClustersCommandOutput> => {
  // @ts-ignore
  return await client.describeGlobalClusters(input, ...args);
};
export async function* paginateDescribeGlobalClusters(
  config: NeptunePaginationConfiguration,
  input: DescribeGlobalClustersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeGlobalClustersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeGlobalClustersCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof Neptune) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NeptuneClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Neptune | NeptuneClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
