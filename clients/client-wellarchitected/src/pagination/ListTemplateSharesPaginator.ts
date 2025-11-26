// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTemplateSharesCommand,
  ListTemplateSharesCommandInput,
  ListTemplateSharesCommandOutput,
} from "../commands/ListTemplateSharesCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTemplateShares: (
  config: WellArchitectedPaginationConfiguration,
  input: ListTemplateSharesCommandInput,
  ...rest: any[]
) => Paginator<ListTemplateSharesCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListTemplateSharesCommandInput,
  ListTemplateSharesCommandOutput
>(WellArchitectedClient, ListTemplateSharesCommand, "NextToken", "NextToken", "MaxResults");
