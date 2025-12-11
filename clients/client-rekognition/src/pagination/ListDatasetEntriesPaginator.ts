// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatasetEntriesCommand,
  ListDatasetEntriesCommandInput,
  ListDatasetEntriesCommandOutput,
} from "../commands/ListDatasetEntriesCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasetEntries: (
  config: RekognitionPaginationConfiguration,
  input: ListDatasetEntriesCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetEntriesCommandOutput> = createPaginator<
  RekognitionPaginationConfiguration,
  ListDatasetEntriesCommandInput,
  ListDatasetEntriesCommandOutput
>(RekognitionClient, ListDatasetEntriesCommand, "NextToken", "NextToken", "MaxResults");
