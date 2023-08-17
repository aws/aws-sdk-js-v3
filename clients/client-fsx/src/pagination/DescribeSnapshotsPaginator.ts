// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeSnapshotsCommand,
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
} from "../commands/DescribeSnapshotsCommand";
import { FSxClient } from "../FSxClient";
import { FSxPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: FSxClient,
  input: DescribeSnapshotsCommandInput,
  ...args: any
): Promise<DescribeSnapshotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeSnapshotsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeSnapshots(
  config: FSxPaginationConfiguration,
  input: DescribeSnapshotsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeSnapshotsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeSnapshotsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof FSxClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FSx | FSxClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
