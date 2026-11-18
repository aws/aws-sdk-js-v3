// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTestTemplatesCommand,
  ListTestTemplatesCommandInput,
  ListTestTemplatesCommandOutput,
} from "../commands/ListTestTemplatesCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestTemplates: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListTestTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListTestTemplatesCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListTestTemplatesCommandInput,
  ListTestTemplatesCommandOutput
>(Resiliencehubv2Client, ListTestTemplatesCommand, "nextToken", "nextToken", "maxResults");
