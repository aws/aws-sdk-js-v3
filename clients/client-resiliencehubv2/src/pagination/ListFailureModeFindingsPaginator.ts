// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFailureModeFindingsCommand,
  ListFailureModeFindingsCommandInput,
  ListFailureModeFindingsCommandOutput,
} from "../commands/ListFailureModeFindingsCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFailureModeFindings: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListFailureModeFindingsCommandInput,
  ...rest: any[]
) => Paginator<ListFailureModeFindingsCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListFailureModeFindingsCommandInput,
  ListFailureModeFindingsCommandOutput
>(Resiliencehubv2Client, ListFailureModeFindingsCommand, "nextToken", "nextToken", "maxResults");
