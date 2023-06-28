// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeRuntimeVersionsCommand,
  DescribeRuntimeVersionsCommandInput,
  DescribeRuntimeVersionsCommandOutput,
} from "../commands/DescribeRuntimeVersionsCommand";
import { SyntheticsClient } from "../SyntheticsClient";
import { SyntheticsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof SyntheticsClient) {
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
