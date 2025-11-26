// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribePoolsCommand,
  DescribePoolsCommandInput,
  DescribePoolsCommandOutput,
} from "../commands/DescribePoolsCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribePools: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribePoolsCommandInput,
  ...rest: any[]
) => Paginator<DescribePoolsCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  DescribePoolsCommandInput,
  DescribePoolsCommandOutput
>(PinpointSMSVoiceV2Client, DescribePoolsCommand, "NextToken", "NextToken", "MaxResults");
