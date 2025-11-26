// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRegistrationVersionsCommand,
  DescribeRegistrationVersionsCommandInput,
  DescribeRegistrationVersionsCommandOutput,
} from "../commands/DescribeRegistrationVersionsCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRegistrationVersions: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeRegistrationVersionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeRegistrationVersionsCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  DescribeRegistrationVersionsCommandInput,
  DescribeRegistrationVersionsCommandOutput
>(PinpointSMSVoiceV2Client, DescribeRegistrationVersionsCommand, "NextToken", "NextToken", "MaxResults");
