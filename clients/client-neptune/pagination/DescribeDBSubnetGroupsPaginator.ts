import { Neptune } from "../Neptune";
import { NeptuneClient } from "../NeptuneClient";
import {
  DescribeDBSubnetGroupsCommand,
  DescribeDBSubnetGroupsCommandInput,
  DescribeDBSubnetGroupsCommandOutput,
} from "../commands/DescribeDBSubnetGroupsCommand";
import { NeptunePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: NeptuneClient,
  input: DescribeDBSubnetGroupsCommandInput,
  ...args: any
): Promise<DescribeDBSubnetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBSubnetGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Neptune,
  input: DescribeDBSubnetGroupsCommandInput,
  ...args: any
): Promise<DescribeDBSubnetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBSubnetGroups(input, ...args);
};
export async function* describeDBSubnetGroupsPaginate(
  config: NeptunePaginationConfiguration,
  input: DescribeDBSubnetGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBSubnetGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBSubnetGroupsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof Neptune) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NeptuneClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Neptune | NeptuneClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
