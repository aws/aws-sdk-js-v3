import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import {
  DescribeOptionGroupsCommand,
  DescribeOptionGroupsCommandInput,
  DescribeOptionGroupsCommandOutput,
} from "../commands/DescribeOptionGroupsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeOptionGroupsCommandInput,
  ...args: any
): Promise<DescribeOptionGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeOptionGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeOptionGroupsCommandInput,
  ...args: any
): Promise<DescribeOptionGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeOptionGroups(input, ...args);
};
export async function* describeOptionGroupsPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeOptionGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeOptionGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeOptionGroupsCommandOutput;
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
