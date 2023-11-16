// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeRegistrationFieldValuesCommand,
  DescribeRegistrationFieldValuesCommandInput,
  DescribeRegistrationFieldValuesCommandOutput,
} from "../commands/DescribeRegistrationFieldValuesCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: PinpointSMSVoiceV2Client,
  input: DescribeRegistrationFieldValuesCommandInput,
  ...args: any
): Promise<DescribeRegistrationFieldValuesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeRegistrationFieldValuesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeRegistrationFieldValues(
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeRegistrationFieldValuesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeRegistrationFieldValuesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeRegistrationFieldValuesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof PinpointSMSVoiceV2Client) {
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
