// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribePhoneNumbersCommand,
  DescribePhoneNumbersCommandInput,
  DescribePhoneNumbersCommandOutput,
} from "../commands/DescribePhoneNumbersCommand";
import { PinpointSMSVoiceV2 } from "../PinpointSMSVoiceV2";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PinpointSMSVoiceV2Client,
  input: DescribePhoneNumbersCommandInput,
  ...args: any
): Promise<DescribePhoneNumbersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribePhoneNumbersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: PinpointSMSVoiceV2,
  input: DescribePhoneNumbersCommandInput,
  ...args: any
): Promise<DescribePhoneNumbersCommandOutput> => {
  // @ts-ignore
  return await client.describePhoneNumbers(input, ...args);
};
export async function* paginateDescribePhoneNumbers(
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribePhoneNumbersCommandInput,
  ...additionalArguments: any
): Paginator<DescribePhoneNumbersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribePhoneNumbersCommandOutput;
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
