import { Synthetics } from "../Synthetics";
import { SyntheticsClient } from "../SyntheticsClient";
import {
  DescribeCanariesCommand,
  DescribeCanariesCommandInput,
  DescribeCanariesCommandOutput,
} from "../commands/DescribeCanariesCommand";
import { SyntheticsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SyntheticsClient,
  input: DescribeCanariesCommandInput,
  ...args: any
): Promise<DescribeCanariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCanariesCommand(input), ...args);
};
const makePagedRequest = async (
  client: Synthetics,
  input: DescribeCanariesCommandInput,
  ...args: any
): Promise<DescribeCanariesCommandOutput> => {
  // @ts-ignore
  return await client.describeCanaries(input, ...args);
};
export async function* describeCanariesPaginate(
  config: SyntheticsPaginationConfiguration,
  input: DescribeCanariesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCanariesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCanariesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Synthetics) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SyntheticsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Synthetics | SyntheticsClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
