// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeOptOutListsCommand,
  DescribeOptOutListsCommandInput,
  DescribeOptOutListsCommandOutput,
} from "../commands/DescribeOptOutListsCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeOptOutLists: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeOptOutListsCommandInput,
  ...rest: any[]
) => Paginator<DescribeOptOutListsCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  DescribeOptOutListsCommandInput,
  DescribeOptOutListsCommandOutput
>(PinpointSMSVoiceV2Client, DescribeOptOutListsCommand, "NextToken", "NextToken", "MaxResults");
