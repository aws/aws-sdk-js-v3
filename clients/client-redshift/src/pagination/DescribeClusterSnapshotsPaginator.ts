// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeClusterSnapshotsCommand,
  DescribeClusterSnapshotsCommandInput,
  DescribeClusterSnapshotsCommandOutput,
} from "../commands/DescribeClusterSnapshotsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeClusterSnapshotsCommandInput,
  ...args: any
): Promise<DescribeClusterSnapshotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeClusterSnapshotsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeClusterSnapshots(
  config: RedshiftPaginationConfiguration,
  input: DescribeClusterSnapshotsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeClusterSnapshotsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeClusterSnapshotsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RedshiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Redshift | RedshiftClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
