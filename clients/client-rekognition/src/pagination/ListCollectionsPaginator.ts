// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCollectionsCommand,
  ListCollectionsCommandInput,
  ListCollectionsCommandOutput,
} from "../commands/ListCollectionsCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCollections: (
  config: RekognitionPaginationConfiguration,
  input: ListCollectionsCommandInput,
  ...rest: any[]
) => Paginator<ListCollectionsCommandOutput> = createPaginator<
  RekognitionPaginationConfiguration,
  ListCollectionsCommandInput,
  ListCollectionsCommandOutput
>(RekognitionClient, ListCollectionsCommand, "NextToken", "NextToken", "MaxResults");
