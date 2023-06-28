// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeDBClusterSnapshotsCommand,
  DescribeDBClusterSnapshotsCommandInput,
  DescribeDBClusterSnapshotsCommandOutput,
} from "../commands/DescribeDBClusterSnapshotsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBClusterSnapshotsCommandInput,
  ...args: any
): Promise<DescribeDBClusterSnapshotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBClusterSnapshotsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeDBClusterSnapshots(
  config: RDSPaginationConfiguration,
  input: DescribeDBClusterSnapshotsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBClusterSnapshotsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBClusterSnapshotsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
