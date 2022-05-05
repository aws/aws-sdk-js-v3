// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeEngineDefaultParametersCommand,
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput,
} from "../commands/DescribeEngineDefaultParametersCommand";
import { ElastiCache } from "../ElastiCache";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ElastiCacheClient,
  input: DescribeEngineDefaultParametersCommandInput,
  ...args: any
): Promise<DescribeEngineDefaultParametersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEngineDefaultParametersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ElastiCache,
  input: DescribeEngineDefaultParametersCommandInput,
  ...args: any
): Promise<DescribeEngineDefaultParametersCommandOutput> => {
  // @ts-ignore
  return await client.describeEngineDefaultParameters(input, ...args);
};
export async function* paginateDescribeEngineDefaultParameters(
  config: ElastiCachePaginationConfiguration,
  input: DescribeEngineDefaultParametersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEngineDefaultParametersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEngineDefaultParametersCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof ElastiCache) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElastiCacheClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElastiCache | ElastiCacheClient");
    }
    yield page;
    const prevToken = token;
    token = page.EngineDefaults!.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
