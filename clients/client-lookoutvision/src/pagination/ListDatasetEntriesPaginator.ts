// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListDatasetEntriesCommand,
  ListDatasetEntriesCommandInput,
  ListDatasetEntriesCommandOutput,
} from "../commands/ListDatasetEntriesCommand";
import { LookoutVisionClient } from "../LookoutVisionClient";
import { LookoutVisionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasetEntries: (
  config: LookoutVisionPaginationConfiguration,
  input: ListDatasetEntriesCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetEntriesCommandOutput> = createPaginator<
  LookoutVisionPaginationConfiguration,
  ListDatasetEntriesCommandInput,
  ListDatasetEntriesCommandOutput
>(LookoutVisionClient, ListDatasetEntriesCommand, "NextToken", "NextToken", "MaxResults");
