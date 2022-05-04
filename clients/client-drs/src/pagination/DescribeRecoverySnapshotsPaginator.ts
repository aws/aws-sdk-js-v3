// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeRecoverySnapshotsCommand,
  DescribeRecoverySnapshotsCommandInput,
  DescribeRecoverySnapshotsCommandOutput,
} from "../commands/DescribeRecoverySnapshotsCommand";
import { Drs } from "../Drs";
import { DrsClient } from "../DrsClient";
import { DrsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DrsClient,
  input: DescribeRecoverySnapshotsCommandInput,
  ...args: any
): Promise<DescribeRecoverySnapshotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeRecoverySnapshotsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Drs,
  input: DescribeRecoverySnapshotsCommandInput,
  ...args: any
): Promise<DescribeRecoverySnapshotsCommandOutput> => {
  // @ts-ignore
  return await client.describeRecoverySnapshots(input, ...args);
};
export async function* paginateDescribeRecoverySnapshots(
  config: DrsPaginationConfiguration,
  input: DescribeRecoverySnapshotsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeRecoverySnapshotsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeRecoverySnapshotsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Drs) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DrsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Drs | DrsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
