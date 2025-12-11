// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AIOpsClient } from "../AIOpsClient";
import {
  ListInvestigationGroupsCommand,
  ListInvestigationGroupsCommandInput,
  ListInvestigationGroupsCommandOutput,
} from "../commands/ListInvestigationGroupsCommand";
import { AIOpsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInvestigationGroups: (
  config: AIOpsPaginationConfiguration,
  input: ListInvestigationGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListInvestigationGroupsCommandOutput> = createPaginator<
  AIOpsPaginationConfiguration,
  ListInvestigationGroupsCommandInput,
  ListInvestigationGroupsCommandOutput
>(AIOpsClient, ListInvestigationGroupsCommand, "nextToken", "nextToken", "maxResults");
