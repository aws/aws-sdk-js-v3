// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPoolOriginationIdentitiesCommand,
  ListPoolOriginationIdentitiesCommandInput,
  ListPoolOriginationIdentitiesCommandOutput,
} from "../commands/ListPoolOriginationIdentitiesCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPoolOriginationIdentities: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: ListPoolOriginationIdentitiesCommandInput,
  ...rest: any[]
) => Paginator<ListPoolOriginationIdentitiesCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  ListPoolOriginationIdentitiesCommandInput,
  ListPoolOriginationIdentitiesCommandOutput
>(PinpointSMSVoiceV2Client, ListPoolOriginationIdentitiesCommand, "NextToken", "NextToken", "MaxResults");
