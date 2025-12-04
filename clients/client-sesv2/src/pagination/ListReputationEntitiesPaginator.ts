// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReputationEntitiesCommand,
  ListReputationEntitiesCommandInput,
  ListReputationEntitiesCommandOutput,
} from "../commands/ListReputationEntitiesCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReputationEntities: (
  config: SESv2PaginationConfiguration,
  input: ListReputationEntitiesCommandInput,
  ...rest: any[]
) => Paginator<ListReputationEntitiesCommandOutput> = createPaginator<
  SESv2PaginationConfiguration,
  ListReputationEntitiesCommandInput,
  ListReputationEntitiesCommandOutput
>(SESv2Client, ListReputationEntitiesCommand, "NextToken", "NextToken", "PageSize");
