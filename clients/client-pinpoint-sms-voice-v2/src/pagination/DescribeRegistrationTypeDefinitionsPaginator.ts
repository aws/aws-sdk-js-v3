// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeRegistrationTypeDefinitionsCommand,
  DescribeRegistrationTypeDefinitionsCommandInput,
  DescribeRegistrationTypeDefinitionsCommandOutput,
} from "../commands/DescribeRegistrationTypeDefinitionsCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: PinpointSMSVoiceV2Client,
  input: DescribeRegistrationTypeDefinitionsCommandInput,
  ...args: any
): Promise<DescribeRegistrationTypeDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeRegistrationTypeDefinitionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeRegistrationTypeDefinitions(
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeRegistrationTypeDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeRegistrationTypeDefinitionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeRegistrationTypeDefinitionsCommandOutput;
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
