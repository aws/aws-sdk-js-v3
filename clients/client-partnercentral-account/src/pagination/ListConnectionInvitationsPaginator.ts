// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListConnectionInvitationsCommand,
  ListConnectionInvitationsCommandInput,
  ListConnectionInvitationsCommandOutput,
} from "../commands/ListConnectionInvitationsCommand";
import { PartnerCentralAccountClient } from "../PartnerCentralAccountClient";
import { PartnerCentralAccountPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnectionInvitations: (
  config: PartnerCentralAccountPaginationConfiguration,
  input: ListConnectionInvitationsCommandInput,
  ...rest: any[]
) => Paginator<ListConnectionInvitationsCommandOutput> = createPaginator<
  PartnerCentralAccountPaginationConfiguration,
  ListConnectionInvitationsCommandInput,
  ListConnectionInvitationsCommandOutput
>(PartnerCentralAccountClient, ListConnectionInvitationsCommand, "NextToken", "NextToken", "MaxResults");
