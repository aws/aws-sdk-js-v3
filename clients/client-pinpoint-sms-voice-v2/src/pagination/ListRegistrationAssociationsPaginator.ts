// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRegistrationAssociationsCommand,
  ListRegistrationAssociationsCommandInput,
  ListRegistrationAssociationsCommandOutput,
} from "../commands/ListRegistrationAssociationsCommand";
import { PinpointSMSVoiceV2Client } from "../PinpointSMSVoiceV2Client";
import { PinpointSMSVoiceV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRegistrationAssociations: (
  config: PinpointSMSVoiceV2PaginationConfiguration,
  input: ListRegistrationAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListRegistrationAssociationsCommandOutput> = createPaginator<
  PinpointSMSVoiceV2PaginationConfiguration,
  ListRegistrationAssociationsCommandInput,
  ListRegistrationAssociationsCommandOutput
>(PinpointSMSVoiceV2Client, ListRegistrationAssociationsCommand, "NextToken", "NextToken", "MaxResults");
