// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeInstancePatchStatesForPatchGroupCommand,
  DescribeInstancePatchStatesForPatchGroupCommandInput,
  DescribeInstancePatchStatesForPatchGroupCommandOutput,
} from "../commands/DescribeInstancePatchStatesForPatchGroupCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeInstancePatchStatesForPatchGroupCommandInput,
  ...args: any
): Promise<DescribeInstancePatchStatesForPatchGroupCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInstancePatchStatesForPatchGroupCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeInstancePatchStatesForPatchGroup(
  config: SSMPaginationConfiguration,
  input: DescribeInstancePatchStatesForPatchGroupCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInstancePatchStatesForPatchGroupCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeInstancePatchStatesForPatchGroupCommandOutput;
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
