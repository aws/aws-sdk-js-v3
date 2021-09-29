import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeInstanceInformationCommand,
  DescribeInstanceInformationCommandInput,
  DescribeInstanceInformationCommandOutput,
} from "../commands/DescribeInstanceInformationCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeInstanceInformationCommandInput,
  ...args: any
): Promise<DescribeInstanceInformationCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInstanceInformationCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: DescribeInstanceInformationCommandInput,
  ...args: any
): Promise<DescribeInstanceInformationCommandOutput> => {
  // @ts-ignore
  return await client.describeInstanceInformation(input, ...args);
};
export async function* paginateDescribeInstanceInformation(
  config: SSMPaginationConfiguration,
  input: DescribeInstanceInformationCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInstanceInformationCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeInstanceInformationCommandOutput;
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
