// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAvailablePhoneNumbersCommand,
  ListAvailablePhoneNumbersCommandInput,
  ListAvailablePhoneNumbersCommandOutput,
} from "../commands/ListAvailablePhoneNumbersCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import type { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAvailablePhoneNumbers: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: ListAvailablePhoneNumbersCommandInput,
  ...rest: any[]
) => Paginator<ListAvailablePhoneNumbersCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  ListAvailablePhoneNumbersCommandInput,
  ListAvailablePhoneNumbersCommandOutput
>(PinpointSMSVoiceV2Client, ListAvailablePhoneNumbersCommand, "NextToken", "NextToken", "MaxResults");
