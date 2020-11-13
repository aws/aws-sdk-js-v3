import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import {
  DescribeDBSecurityGroupsCommand,
  DescribeDBSecurityGroupsCommandInput,
  DescribeDBSecurityGroupsCommandOutput,
} from "../commands/DescribeDBSecurityGroupsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBSecurityGroupsCommandInput,
  ...args: any
): Promise<DescribeDBSecurityGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBSecurityGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBSecurityGroupsCommandInput,
  ...args: any
): Promise<DescribeDBSecurityGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBSecurityGroups(input, ...args);
};
export async function* describeDBSecurityGroupsPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeDBSecurityGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBSecurityGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBSecurityGroupsCommandOutput;
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
