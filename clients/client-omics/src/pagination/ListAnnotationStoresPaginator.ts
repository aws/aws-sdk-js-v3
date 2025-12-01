// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAnnotationStoresCommand,
  ListAnnotationStoresCommandInput,
  ListAnnotationStoresCommandOutput,
} from "../commands/ListAnnotationStoresCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAnnotationStores: (
  config: OmicsPaginationConfiguration,
  input: ListAnnotationStoresCommandInput,
  ...rest: any[]
) => Paginator<ListAnnotationStoresCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListAnnotationStoresCommandInput,
  ListAnnotationStoresCommandOutput
>(OmicsClient, ListAnnotationStoresCommand, "nextToken", "nextToken", "maxResults");
