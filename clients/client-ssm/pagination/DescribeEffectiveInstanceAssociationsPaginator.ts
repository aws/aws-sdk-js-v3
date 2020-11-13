import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeEffectiveInstanceAssociationsCommand,
  DescribeEffectiveInstanceAssociationsCommandInput,
  DescribeEffectiveInstanceAssociationsCommandOutput,
} from "../commands/DescribeEffectiveInstanceAssociationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeEffectiveInstanceAssociationsCommandInput,
  ...args: any
): Promise<DescribeEffectiveInstanceAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEffectiveInstanceAssociationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: DescribeEffectiveInstanceAssociationsCommandInput,
  ...args: any
): Promise<DescribeEffectiveInstanceAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.describeEffectiveInstanceAssociations(input, ...args);
};
export async function* describeEffectiveInstanceAssociationsPaginate(
  config: SSMPaginationConfiguration,
  input: DescribeEffectiveInstanceAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEffectiveInstanceAssociationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEffectiveInstanceAssociationsCommandOutput;
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
