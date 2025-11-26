// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRegistrationFieldDefinitionsCommand,
  DescribeRegistrationFieldDefinitionsCommandInput,
  DescribeRegistrationFieldDefinitionsCommandOutput,
} from "../commands/DescribeRegistrationFieldDefinitionsCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRegistrationFieldDefinitions: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeRegistrationFieldDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeRegistrationFieldDefinitionsCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  DescribeRegistrationFieldDefinitionsCommandInput,
  DescribeRegistrationFieldDefinitionsCommandOutput
>(PinpointSMSVoiceV2Client, DescribeRegistrationFieldDefinitionsCommand, "NextToken", "NextToken", "MaxResults");
