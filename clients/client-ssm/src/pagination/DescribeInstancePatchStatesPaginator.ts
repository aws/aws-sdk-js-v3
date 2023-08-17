// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeInstancePatchStatesCommand,
  DescribeInstancePatchStatesCommandInput,
  DescribeInstancePatchStatesCommandOutput,
} from "../commands/DescribeInstancePatchStatesCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeInstancePatchStatesCommandInput,
  ...args: any
): Promise<DescribeInstancePatchStatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInstancePatchStatesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeInstancePatchStates(
  config: SSMPaginationConfiguration,
  input: DescribeInstancePatchStatesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInstancePatchStatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeInstancePatchStatesCommandOutput;
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
