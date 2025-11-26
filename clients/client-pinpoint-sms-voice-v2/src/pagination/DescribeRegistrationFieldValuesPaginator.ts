// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRegistrationFieldValuesCommand,
  DescribeRegistrationFieldValuesCommandInput,
  DescribeRegistrationFieldValuesCommandOutput,
} from "../commands/DescribeRegistrationFieldValuesCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRegistrationFieldValues: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeRegistrationFieldValuesCommandInput,
  ...rest: any[]
) => Paginator<DescribeRegistrationFieldValuesCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  DescribeRegistrationFieldValuesCommandInput,
  DescribeRegistrationFieldValuesCommandOutput
>(PinpointSMSVoiceV2Client, DescribeRegistrationFieldValuesCommand, "NextToken", "NextToken", "MaxResults");
