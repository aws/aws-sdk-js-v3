import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeAvailablePatchesCommand,
  DescribeAvailablePatchesCommandInput,
  DescribeAvailablePatchesCommandOutput,
} from "../commands/DescribeAvailablePatchesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeAvailablePatchesCommandInput,
  ...args: any
): Promise<DescribeAvailablePatchesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAvailablePatchesCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: DescribeAvailablePatchesCommandInput,
  ...args: any
): Promise<DescribeAvailablePatchesCommandOutput> => {
  // @ts-ignore
  return await client.describeAvailablePatches(input, ...args);
};
export async function* paginateDescribeAvailablePatches(
  config: SSMPaginationConfiguration,
  input: DescribeAvailablePatchesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAvailablePatchesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAvailablePatchesCommandOutput;
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
