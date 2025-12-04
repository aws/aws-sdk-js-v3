// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAnnotationStoreVersionsCommand,
  ListAnnotationStoreVersionsCommandInput,
  ListAnnotationStoreVersionsCommandOutput,
} from "../commands/ListAnnotationStoreVersionsCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAnnotationStoreVersions: (
  config: OmicsPaginationConfiguration,
  input: ListAnnotationStoreVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListAnnotationStoreVersionsCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListAnnotationStoreVersionsCommandInput,
  ListAnnotationStoreVersionsCommandOutput
>(OmicsClient, ListAnnotationStoreVersionsCommand, "nextToken", "nextToken", "maxResults");
