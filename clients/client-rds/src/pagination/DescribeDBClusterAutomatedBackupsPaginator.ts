// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeDBClusterAutomatedBackupsCommand,
  DescribeDBClusterAutomatedBackupsCommandInput,
  DescribeDBClusterAutomatedBackupsCommandOutput,
} from "../commands/DescribeDBClusterAutomatedBackupsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBClusterAutomatedBackupsCommandInput,
  ...args: any
): Promise<DescribeDBClusterAutomatedBackupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBClusterAutomatedBackupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeDBClusterAutomatedBackups(
  config: RDSPaginationConfiguration,
  input: DescribeDBClusterAutomatedBackupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBClusterAutomatedBackupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBClusterAutomatedBackupsCommandOutput;
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
