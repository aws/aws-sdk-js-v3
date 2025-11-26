// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRegistrationAttachmentsCommand,
  DescribeRegistrationAttachmentsCommandInput,
  DescribeRegistrationAttachmentsCommandOutput,
} from "../commands/DescribeRegistrationAttachmentsCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRegistrationAttachments: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeRegistrationAttachmentsCommandInput,
  ...rest: any[]
) => Paginator<DescribeRegistrationAttachmentsCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  DescribeRegistrationAttachmentsCommandInput,
  DescribeRegistrationAttachmentsCommandOutput
>(PinpointSMSVoiceV2Client, DescribeRegistrationAttachmentsCommand, "NextToken", "NextToken", "MaxResults");
