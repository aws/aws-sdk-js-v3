// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeVerifiedDestinationNumbersCommand,
  DescribeVerifiedDestinationNumbersCommandInput,
  DescribeVerifiedDestinationNumbersCommandOutput,
} from "../commands/DescribeVerifiedDestinationNumbersCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeVerifiedDestinationNumbers: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeVerifiedDestinationNumbersCommandInput,
  ...rest: any[]
) => Paginator<DescribeVerifiedDestinationNumbersCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  DescribeVerifiedDestinationNumbersCommandInput,
  DescribeVerifiedDestinationNumbersCommandOutput
>(PinpointSMSVoiceV2Client, DescribeVerifiedDestinationNumbersCommand, "NextToken", "NextToken", "MaxResults");
