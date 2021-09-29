import { Synthetics } from "../Synthetics";
import { SyntheticsClient } from "../SyntheticsClient";
import {
  DescribeCanariesLastRunCommand,
  DescribeCanariesLastRunCommandInput,
  DescribeCanariesLastRunCommandOutput,
} from "../commands/DescribeCanariesLastRunCommand";
import { SyntheticsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SyntheticsClient,
  input: DescribeCanariesLastRunCommandInput,
  ...args: any
): Promise<DescribeCanariesLastRunCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCanariesLastRunCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Synthetics,
  input: DescribeCanariesLastRunCommandInput,
  ...args: any
): Promise<DescribeCanariesLastRunCommandOutput> => {
  // @ts-ignore
  return await client.describeCanariesLastRun(input, ...args);
};
export async function* paginateDescribeCanariesLastRun(
  config: SyntheticsPaginationConfiguration,
  input: DescribeCanariesLastRunCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCanariesLastRunCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCanariesLastRunCommandOutput;
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
