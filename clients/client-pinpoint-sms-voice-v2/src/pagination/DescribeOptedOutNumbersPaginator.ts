// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeOptedOutNumbersCommand,
  DescribeOptedOutNumbersCommandInput,
  DescribeOptedOutNumbersCommandOutput,
} from "../commands/DescribeOptedOutNumbersCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeOptedOutNumbers: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeOptedOutNumbersCommandInput,
  ...rest: any[]
) => Paginator<DescribeOptedOutNumbersCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  DescribeOptedOutNumbersCommandInput,
  DescribeOptedOutNumbersCommandOutput
>(PinpointSMSVoiceV2Client, DescribeOptedOutNumbersCommand, "NextToken", "NextToken", "MaxResults");
