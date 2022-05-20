// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeSenderIdsCommand,
  DescribeSenderIdsCommandInput,
  DescribeSenderIdsCommandOutput,
} from "../commands/DescribeSenderIdsCommand";
import { PinpointSMSVoiceV2 } from "../PinpointSMSVoiceV2";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PinpointSMSVoiceV2Client,
  input: DescribeSenderIdsCommandInput,
  ...args: any
): Promise<DescribeSenderIdsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeSenderIdsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: PinpointSMSVoiceV2,
  input: DescribeSenderIdsCommandInput,
  ...args: any
): Promise<DescribeSenderIdsCommandOutput> => {
  // @ts-ignore
  return await client.describeSenderIds(input, ...args);
};
export async function* paginateDescribeSenderIds(
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeSenderIdsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeSenderIdsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeSenderIdsCommandOutput;
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
