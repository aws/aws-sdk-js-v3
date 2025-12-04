// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeAccountAttributesCommand,
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "../commands/DescribeAccountAttributesCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAccountAttributes: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeAccountAttributesCommandInput,
  ...rest: any[]
) => Paginator<DescribeAccountAttributesCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput
>(PinpointSMSVoiceV2Client, DescribeAccountAttributesCommand, "NextToken", "NextToken", "MaxResults");
