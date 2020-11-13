import { CloudHSMV2 } from "../CloudHSMV2";
import { CloudHSMV2Client } from "../CloudHSMV2Client";
import {
  DescribeBackupsCommand,
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput,
} from "../commands/DescribeBackupsCommand";
import { CloudHSMV2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudHSMV2Client,
  input: DescribeBackupsCommandInput,
  ...args: any
): Promise<DescribeBackupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeBackupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudHSMV2,
  input: DescribeBackupsCommandInput,
  ...args: any
): Promise<DescribeBackupsCommandOutput> => {
  // @ts-ignore
  return await client.describeBackups(input, ...args);
};
export async function* describeBackupsPaginate(
  config: CloudHSMV2PaginationConfiguration,
  input: DescribeBackupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeBackupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeBackupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudHSMV2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudHSMV2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudHSMV2 | CloudHSMV2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
