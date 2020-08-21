import { AutoScaling } from "../AutoScaling";
import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "../commands/DescribeTagsCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AutoScalingClient,
  input: DescribeTagsCommandInput,
  ...args: any
): Promise<DescribeTagsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTagsCommand(input, ...args));
};
const makePagedRequest = async (
  client: AutoScaling,
  input: DescribeTagsCommandInput,
  ...args: any
): Promise<DescribeTagsCommandOutput> => {
  // @ts-ignore
  return await client.describeTags(input, ...args);
};
export async function* describeTagsPaginate(
  config: AutoScalingPaginationConfiguration,
  input: DescribeTagsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTagsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeTagsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof AutoScaling) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AutoScalingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AutoScaling | AutoScalingClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
