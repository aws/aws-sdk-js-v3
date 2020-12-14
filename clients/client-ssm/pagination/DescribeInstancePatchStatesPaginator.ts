import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeInstancePatchStatesCommand,
  DescribeInstancePatchStatesCommandInput,
  DescribeInstancePatchStatesCommandOutput,
} from "../commands/DescribeInstancePatchStatesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeInstancePatchStatesCommandInput,
  ...args: any
): Promise<DescribeInstancePatchStatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInstancePatchStatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: DescribeInstancePatchStatesCommandInput,
  ...args: any
): Promise<DescribeInstancePatchStatesCommandOutput> => {
  // @ts-ignore
  return await client.describeInstancePatchStates(input, ...args);
};
export async function* paginateDescribeInstancePatchStates(
  config: SSMPaginationConfiguration,
  input: DescribeInstancePatchStatesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInstancePatchStatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeInstancePatchStatesCommandOutput;
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
