import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import {
  DescribeDBInstanceAutomatedBackupsCommand,
  DescribeDBInstanceAutomatedBackupsCommandInput,
  DescribeDBInstanceAutomatedBackupsCommandOutput,
} from "../commands/DescribeDBInstanceAutomatedBackupsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBInstanceAutomatedBackupsCommandInput,
  ...args: any
): Promise<DescribeDBInstanceAutomatedBackupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBInstanceAutomatedBackupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBInstanceAutomatedBackupsCommandInput,
  ...args: any
): Promise<DescribeDBInstanceAutomatedBackupsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBInstanceAutomatedBackups(input, ...args);
};
export async function* paginateDescribeDBInstanceAutomatedBackups(
  config: RDSPaginationConfiguration,
  input: DescribeDBInstanceAutomatedBackupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBInstanceAutomatedBackupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBInstanceAutomatedBackupsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
