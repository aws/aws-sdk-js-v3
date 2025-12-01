// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProgramManagementAccountsCommand,
  ListProgramManagementAccountsCommandInput,
  ListProgramManagementAccountsCommandOutput,
} from "../commands/ListProgramManagementAccountsCommand";
import { PartnerCentralChannelClient } from "../PartnerCentralChannelClient";
import { PartnerCentralChannelPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProgramManagementAccounts: (
  config: PartnerCentralChannelPaginationConfiguration,
  input: ListProgramManagementAccountsCommandInput,
  ...rest: any[]
) => Paginator<ListProgramManagementAccountsCommandOutput> = createPaginator<
  PartnerCentralChannelPaginationConfiguration,
  ListProgramManagementAccountsCommandInput,
  ListProgramManagementAccountsCommandOutput
>(PartnerCentralChannelClient, ListProgramManagementAccountsCommand, "nextToken", "nextToken", "maxResults");
