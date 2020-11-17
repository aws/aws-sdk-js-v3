import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeInstancePatchStatesForPatchGroupCommand,
  DescribeInstancePatchStatesForPatchGroupCommandInput,
  DescribeInstancePatchStatesForPatchGroupCommandOutput,
} from "../commands/DescribeInstancePatchStatesForPatchGroupCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeInstancePatchStatesForPatchGroupCommandInput,
  ...args: any
): Promise<DescribeInstancePatchStatesForPatchGroupCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInstancePatchStatesForPatchGroupCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: DescribeInstancePatchStatesForPatchGroupCommandInput,
  ...args: any
): Promise<DescribeInstancePatchStatesForPatchGroupCommandOutput> => {
  // @ts-ignore
  return await client.describeInstancePatchStatesForPatchGroup(input, ...args);
};
export async function* paginateDescribeInstancePatchStatesForPatchGroup(
  config: SSMPaginationConfiguration,
  input: DescribeInstancePatchStatesForPatchGroupCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInstancePatchStatesForPatchGroupCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeInstancePatchStatesForPatchGroupCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
