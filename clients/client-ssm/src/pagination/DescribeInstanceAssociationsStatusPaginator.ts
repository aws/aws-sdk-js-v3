import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeInstanceAssociationsStatusCommand,
  DescribeInstanceAssociationsStatusCommandInput,
  DescribeInstanceAssociationsStatusCommandOutput,
} from "../commands/DescribeInstanceAssociationsStatusCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeInstanceAssociationsStatusCommandInput,
  ...args: any
): Promise<DescribeInstanceAssociationsStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInstanceAssociationsStatusCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: DescribeInstanceAssociationsStatusCommandInput,
  ...args: any
): Promise<DescribeInstanceAssociationsStatusCommandOutput> => {
  // @ts-ignore
  return await client.describeInstanceAssociationsStatus(input, ...args);
};
export async function* paginateDescribeInstanceAssociationsStatus(
  config: SSMPaginationConfiguration,
  input: DescribeInstanceAssociationsStatusCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInstanceAssociationsStatusCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeInstanceAssociationsStatusCommandOutput;
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
