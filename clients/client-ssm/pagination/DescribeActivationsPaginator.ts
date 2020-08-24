import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeActivationsCommand,
  DescribeActivationsCommandInput,
  DescribeActivationsCommandOutput,
} from "../commands/DescribeActivationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeActivationsCommandInput,
  ...args: any
): Promise<DescribeActivationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeActivationsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SSM,
  input: DescribeActivationsCommandInput,
  ...args: any
): Promise<DescribeActivationsCommandOutput> => {
  // @ts-ignore
  return await client.describeActivations(input, ...args);
};
export async function* describeActivationsPaginate(
  config: SSMPaginationConfiguration,
  input: DescribeActivationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeActivationsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeActivationsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
