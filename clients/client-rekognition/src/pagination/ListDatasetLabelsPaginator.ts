// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatasetLabelsCommand,
  ListDatasetLabelsCommandInput,
  ListDatasetLabelsCommandOutput,
} from "../commands/ListDatasetLabelsCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasetLabels: (
  config: RekognitionPaginationConfiguration,
  input: ListDatasetLabelsCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetLabelsCommandOutput> = createPaginator<
  RekognitionPaginationConfiguration,
  ListDatasetLabelsCommandInput,
  ListDatasetLabelsCommandOutput
>(RekognitionClient, ListDatasetLabelsCommand, "NextToken", "NextToken", "MaxResults");
