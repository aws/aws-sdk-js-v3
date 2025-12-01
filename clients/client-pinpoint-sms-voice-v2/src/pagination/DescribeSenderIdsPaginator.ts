// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSenderIdsCommand,
  DescribeSenderIdsCommandInput,
  DescribeSenderIdsCommandOutput,
} from "../commands/DescribeSenderIdsCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSenderIds: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: DescribeSenderIdsCommandInput,
  ...rest: any[]
) => Paginator<DescribeSenderIdsCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  DescribeSenderIdsCommandInput,
  DescribeSenderIdsCommandOutput
>(PinpointSMSVoiceV2Client, DescribeSenderIdsCommand, "NextToken", "NextToken", "MaxResults");
