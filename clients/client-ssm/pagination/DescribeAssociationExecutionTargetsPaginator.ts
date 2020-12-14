import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeAssociationExecutionTargetsCommand,
  DescribeAssociationExecutionTargetsCommandInput,
  DescribeAssociationExecutionTargetsCommandOutput,
} from "../commands/DescribeAssociationExecutionTargetsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeAssociationExecutionTargetsCommandInput,
  ...args: any
): Promise<DescribeAssociationExecutionTargetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAssociationExecutionTargetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: DescribeAssociationExecutionTargetsCommandInput,
  ...args: any
): Promise<DescribeAssociationExecutionTargetsCommandOutput> => {
  // @ts-ignore
  return await client.describeAssociationExecutionTargets(input, ...args);
};
export async function* paginateDescribeAssociationExecutionTargets(
  config: SSMPaginationConfiguration,
  input: DescribeAssociationExecutionTargetsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAssociationExecutionTargetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAssociationExecutionTargetsCommandOutput;
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
