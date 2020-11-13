import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeEffectivePatchesForPatchBaselineCommand,
  DescribeEffectivePatchesForPatchBaselineCommandInput,
  DescribeEffectivePatchesForPatchBaselineCommandOutput,
} from "../commands/DescribeEffectivePatchesForPatchBaselineCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeEffectivePatchesForPatchBaselineCommandInput,
  ...args: any
): Promise<DescribeEffectivePatchesForPatchBaselineCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEffectivePatchesForPatchBaselineCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: DescribeEffectivePatchesForPatchBaselineCommandInput,
  ...args: any
): Promise<DescribeEffectivePatchesForPatchBaselineCommandOutput> => {
  // @ts-ignore
  return await client.describeEffectivePatchesForPatchBaseline(input, ...args);
};
export async function* describeEffectivePatchesForPatchBaselinePaginate(
  config: SSMPaginationConfiguration,
  input: DescribeEffectivePatchesForPatchBaselineCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEffectivePatchesForPatchBaselineCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
