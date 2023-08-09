// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeParametersCommand,
  DescribeParametersCommandInput,
  DescribeParametersCommandOutput,
} from "../commands/DescribeParametersCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeParametersCommandInput,
  ...args: any
): Promise<DescribeParametersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeParametersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeParameters(
  config: SSMPaginationConfiguration,
  input: DescribeParametersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeParametersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeParametersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
