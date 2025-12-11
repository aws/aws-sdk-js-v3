// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribePhoneNumbersCommand,
  DescribePhoneNumbersCommandInput,
  DescribePhoneNumbersCommandOutput,
} from "../commands/DescribePhoneNumbersCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribePhoneNumbers: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribePhoneNumbersCommandInput,
  ...rest: any[]
) => Paginator<DescribePhoneNumbersCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  DescribePhoneNumbersCommandInput,
  DescribePhoneNumbersCommandOutput
>(PinpointSMSVoiceV2Client, DescribePhoneNumbersCommand, "NextToken", "NextToken", "MaxResults");
