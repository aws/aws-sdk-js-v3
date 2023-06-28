// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeGlobalClustersCommand,
  DescribeGlobalClustersCommandInput,
  DescribeGlobalClustersCommandOutput,
} from "../commands/DescribeGlobalClustersCommand";
import { DocDBClient } from "../DocDBClient";
import { DocDBPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DocDBClient,
  input: DescribeGlobalClustersCommandInput,
  ...args: any
): Promise<DescribeGlobalClustersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeGlobalClustersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeGlobalClusters(
  config: DocDBPaginationConfiguration,
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
    if (config.client instanceof DocDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DocDB | DocDBClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
