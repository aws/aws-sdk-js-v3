// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeSnapshotCopyGrantsCommand,
  DescribeSnapshotCopyGrantsCommandInput,
  DescribeSnapshotCopyGrantsCommandOutput,
} from "../commands/DescribeSnapshotCopyGrantsCommand";
import { Redshift } from "../Redshift";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeSnapshotCopyGrantsCommandInput,
  ...args: any
): Promise<DescribeSnapshotCopyGrantsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeSnapshotCopyGrantsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Redshift,
  input: DescribeSnapshotCopyGrantsCommandInput,
  ...args: any
): Promise<DescribeSnapshotCopyGrantsCommandOutput> => {
  // @ts-ignore
  return await client.describeSnapshotCopyGrants(input, ...args);
};
export async function* paginateDescribeSnapshotCopyGrants(
  config: RedshiftPaginationConfiguration,
  input: DescribeSnapshotCopyGrantsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeSnapshotCopyGrantsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeSnapshotCopyGrantsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof Redshift) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RedshiftClient) {
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
