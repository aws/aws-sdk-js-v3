import { Synthetics } from "../Synthetics";
import { SyntheticsClient } from "../SyntheticsClient";
import {
  DescribeRuntimeVersionsCommand,
  DescribeRuntimeVersionsCommandInput,
  DescribeRuntimeVersionsCommandOutput,
} from "../commands/DescribeRuntimeVersionsCommand";
import { SyntheticsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SyntheticsClient,
  input: DescribeRuntimeVersionsCommandInput,
  ...args: any
): Promise<DescribeRuntimeVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeRuntimeVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Synthetics,
  input: DescribeRuntimeVersionsCommandInput,
  ...args: any
): Promise<DescribeRuntimeVersionsCommandOutput> => {
  // @ts-ignore
  return await client.describeRuntimeVersions(input, ...args);
};
export async function* paginateDescribeRuntimeVersions(
  config: SyntheticsPaginationConfiguration,
  input: DescribeRuntimeVersionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeRuntimeVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeRuntimeVersionsCommandOutput;
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
