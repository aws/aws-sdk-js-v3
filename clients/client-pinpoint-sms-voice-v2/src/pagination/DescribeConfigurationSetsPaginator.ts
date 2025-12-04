// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeConfigurationSetsCommand,
  DescribeConfigurationSetsCommandInput,
  DescribeConfigurationSetsCommandOutput,
} from "../commands/DescribeConfigurationSetsCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeConfigurationSets: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeConfigurationSetsCommandInput,
  ...rest: any[]
) => Paginator<DescribeConfigurationSetsCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  DescribeConfigurationSetsCommandInput,
  DescribeConfigurationSetsCommandOutput
>(PinpointSMSVoiceV2Client, DescribeConfigurationSetsCommand, "NextToken", "NextToken", "MaxResults");
