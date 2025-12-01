// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRegistrationTypeDefinitionsCommand,
  DescribeRegistrationTypeDefinitionsCommandInput,
  DescribeRegistrationTypeDefinitionsCommandOutput,
} from "../commands/DescribeRegistrationTypeDefinitionsCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRegistrationTypeDefinitions: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeRegistrationTypeDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeRegistrationTypeDefinitionsCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  DescribeRegistrationTypeDefinitionsCommandInput,
  DescribeRegistrationTypeDefinitionsCommandOutput
>(PinpointSMSVoiceV2Client, DescribeRegistrationTypeDefinitionsCommand, "NextToken", "NextToken", "MaxResults");
