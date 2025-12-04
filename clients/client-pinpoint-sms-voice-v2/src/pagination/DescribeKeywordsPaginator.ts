// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeKeywordsCommand,
  DescribeKeywordsCommandInput,
  DescribeKeywordsCommandOutput,
} from "../commands/DescribeKeywordsCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeKeywords: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeKeywordsCommandInput,
  ...rest: any[]
) => Paginator<DescribeKeywordsCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  DescribeKeywordsCommandInput,
  DescribeKeywordsCommandOutput
>(PinpointSMSVoiceV2Client, DescribeKeywordsCommand, "NextToken", "NextToken", "MaxResults");
