// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeProtectConfigurationsCommand,
  DescribeProtectConfigurationsCommandInput,
  DescribeProtectConfigurationsCommandOutput,
} from "../commands/DescribeProtectConfigurationsCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeProtectConfigurations: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeProtectConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeProtectConfigurationsCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  DescribeProtectConfigurationsCommandInput,
  DescribeProtectConfigurationsCommandOutput
>(PinpointSMSVoiceV2Client, DescribeProtectConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
