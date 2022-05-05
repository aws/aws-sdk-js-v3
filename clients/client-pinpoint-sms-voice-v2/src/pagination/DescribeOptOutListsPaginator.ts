// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeOptOutListsCommand,
  DescribeOptOutListsCommandInput,
  DescribeOptOutListsCommandOutput,
} from "../commands/DescribeOptOutListsCommand";
import { PinpointSMSVoiceV2 } from "../PinpointSMSVoiceV2";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PinpointSMSVoiceV2Client,
  input: DescribeOptOutListsCommandInput,
  ...args: any
): Promise<DescribeOptOutListsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeOptOutListsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: PinpointSMSVoiceV2,
  input: DescribeOptOutListsCommandInput,
  ...args: any
): Promise<DescribeOptOutListsCommandOutput> => {
  // @ts-ignore
  return await client.describeOptOutLists(input, ...args);
};
export async function* paginateDescribeOptOutLists(
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeOptOutListsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeOptOutListsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeOptOutListsCommandOutput;
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
