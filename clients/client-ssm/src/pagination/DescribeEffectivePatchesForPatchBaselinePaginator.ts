// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeEffectivePatchesForPatchBaselineCommand,
  DescribeEffectivePatchesForPatchBaselineCommandInput,
  DescribeEffectivePatchesForPatchBaselineCommandOutput,
} from "../commands/DescribeEffectivePatchesForPatchBaselineCommand";
import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeEffectivePatchesForPatchBaselineCommandInput,
  ...args: any
): Promise<DescribeEffectivePatchesForPatchBaselineCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEffectivePatchesForPatchBaselineCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: DescribeEffectivePatchesForPatchBaselineCommandInput,
  ...args: any
): Promise<DescribeEffectivePatchesForPatchBaselineCommandOutput> => {
  // @ts-ignore
  return await client.describeEffectivePatchesForPatchBaseline(input, ...args);
};
export async function* paginateDescribeEffectivePatchesForPatchBaseline(
  config: SSMPaginationConfiguration,
  input: DescribeEffectivePatchesForPatchBaselineCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEffectivePatchesForPatchBaselineCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEffectivePatchesForPatchBaselineCommandOutput;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
