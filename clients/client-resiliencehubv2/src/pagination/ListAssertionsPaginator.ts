// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssertionsCommand,
  ListAssertionsCommandInput,
  ListAssertionsCommandOutput,
} from "../commands/ListAssertionsCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssertions: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListAssertionsCommandInput,
  ...rest: any[]
) => Paginator<ListAssertionsCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListAssertionsCommandInput,
  ListAssertionsCommandOutput
>(Resiliencehubv2Client, ListAssertionsCommand, "nextToken", "nextToken", "maxResults");
