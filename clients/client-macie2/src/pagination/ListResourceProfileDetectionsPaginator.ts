// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourceProfileDetectionsCommand,
  ListResourceProfileDetectionsCommandInput,
  ListResourceProfileDetectionsCommandOutput,
} from "../commands/ListResourceProfileDetectionsCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceProfileDetections: (
  config: Macie2PaginationConfiguration,
  input: ListResourceProfileDetectionsCommandInput,
  ...rest: any[]
) => Paginator<ListResourceProfileDetectionsCommandOutput> = createPaginator<
  Macie2PaginationConfiguration,
  ListResourceProfileDetectionsCommandInput,
  ListResourceProfileDetectionsCommandOutput
>(Macie2Client, ListResourceProfileDetectionsCommand, "nextToken", "nextToken", "maxResults");
