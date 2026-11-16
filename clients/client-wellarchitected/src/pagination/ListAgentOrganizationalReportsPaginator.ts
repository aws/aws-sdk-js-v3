// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAgentOrganizationalReportsCommand,
  ListAgentOrganizationalReportsCommandInput,
  ListAgentOrganizationalReportsCommandOutput,
} from "../commands/ListAgentOrganizationalReportsCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import type { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgentOrganizationalReports: (
  config: WellArchitectedPaginationConfiguration,
  input: ListAgentOrganizationalReportsCommandInput,
  ...rest: any[]
) => Paginator<ListAgentOrganizationalReportsCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListAgentOrganizationalReportsCommandInput,
  ListAgentOrganizationalReportsCommandOutput
>(WellArchitectedClient, ListAgentOrganizationalReportsCommand, "nextToken", "nextToken", "maxResults");
