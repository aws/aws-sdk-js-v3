import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeAssociationExecutionsCommand,
  DescribeAssociationExecutionsCommandInput,
  DescribeAssociationExecutionsCommandOutput,
} from "../commands/DescribeAssociationExecutionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeAssociationExecutionsCommandInput,
  ...args: any
): Promise<DescribeAssociationExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAssociationExecutionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: DescribeAssociationExecutionsCommandInput,
  ...args: any
): Promise<DescribeAssociationExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.describeAssociationExecutions(input, ...args);
};
export async function* paginateDescribeAssociationExecutions(
  config: SSMPaginationConfiguration,
  input: DescribeAssociationExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAssociationExecutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAssociationExecutionsCommandOutput;
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
