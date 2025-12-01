// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRegistrationsCommand,
  DescribeRegistrationsCommandInput,
  DescribeRegistrationsCommandOutput,
} from "../commands/DescribeRegistrationsCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRegistrations: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeRegistrationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeRegistrationsCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  DescribeRegistrationsCommandInput,
  DescribeRegistrationsCommandOutput
>(PinpointSMSVoiceV2Client, DescribeRegistrationsCommand, "NextToken", "NextToken", "MaxResults");
