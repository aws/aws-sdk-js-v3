// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRegistrationSectionDefinitionsCommand,
  DescribeRegistrationSectionDefinitionsCommandInput,
  DescribeRegistrationSectionDefinitionsCommandOutput,
} from "../commands/DescribeRegistrationSectionDefinitionsCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRegistrationSectionDefinitions: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeRegistrationSectionDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeRegistrationSectionDefinitionsCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  DescribeRegistrationSectionDefinitionsCommandInput,
  DescribeRegistrationSectionDefinitionsCommandOutput
>(PinpointSMSVoiceV2Client, DescribeRegistrationSectionDefinitionsCommand, "NextToken", "NextToken", "MaxResults");
