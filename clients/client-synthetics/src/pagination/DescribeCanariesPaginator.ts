// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeCanariesCommand,
  DescribeCanariesCommandInput,
  DescribeCanariesCommandOutput,
} from "../commands/DescribeCanariesCommand";
import { Synthetics } from "../Synthetics";
import { SyntheticsClient } from "../SyntheticsClient";
import { SyntheticsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SyntheticsClient,
  input: DescribeCanariesCommandInput,
  ...args: any
): Promise<DescribeCanariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCanariesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Synthetics,
  input: DescribeCanariesCommandInput,
  ...args: any
): Promise<DescribeCanariesCommandOutput> => {
  // @ts-ignore
  return await client.describeCanaries(input, ...args);
};
export async function* paginateDescribeCanaries(
  config: SyntheticsPaginationConfiguration,
  input: DescribeCanariesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCanariesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
