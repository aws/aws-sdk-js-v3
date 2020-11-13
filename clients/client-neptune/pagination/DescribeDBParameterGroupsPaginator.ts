import { Neptune } from "../Neptune";
import { NeptuneClient } from "../NeptuneClient";
import {
  DescribeDBParameterGroupsCommand,
  DescribeDBParameterGroupsCommandInput,
  DescribeDBParameterGroupsCommandOutput,
} from "../commands/DescribeDBParameterGroupsCommand";
import { NeptunePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: NeptuneClient,
  input: DescribeDBParameterGroupsCommandInput,
  ...args: any
): Promise<DescribeDBParameterGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBParameterGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Neptune,
  input: DescribeDBParameterGroupsCommandInput,
  ...args: any
): Promise<DescribeDBParameterGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBParameterGroups(input, ...args);
};
export async function* describeDBParameterGroupsPaginate(
  config: NeptunePaginationConfiguration,
  input: DescribeDBParameterGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBParameterGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBParameterGroupsCommandOutput;
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
