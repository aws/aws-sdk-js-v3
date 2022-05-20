// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeAccountLimitsCommand,
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "../commands/DescribeAccountLimitsCommand";
import { PinpointSMSVoiceV2 } from "../PinpointSMSVoiceV2";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PinpointSMSVoiceV2Client,
  input: DescribeAccountLimitsCommandInput,
  ...args: any
): Promise<DescribeAccountLimitsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAccountLimitsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: PinpointSMSVoiceV2,
  input: DescribeAccountLimitsCommandInput,
  ...args: any
): Promise<DescribeAccountLimitsCommandOutput> => {
  // @ts-ignore
  return await client.describeAccountLimits(input, ...args);
};
export async function* paginateDescribeAccountLimits(
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeAccountLimitsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAccountLimitsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAccountLimitsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof PinpointSMSVoiceV2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PinpointSMSVoiceV2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected PinpointSMSVoiceV2 | PinpointSMSVoiceV2Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
