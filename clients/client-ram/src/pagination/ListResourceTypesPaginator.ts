// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourceTypesCommand,
  ListResourceTypesCommandInput,
  ListResourceTypesCommandOutput,
} from "../commands/ListResourceTypesCommand";
import { RAMClient } from "../RAMClient";
import { RAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceTypes: (
  config: RAMPaginationConfiguration,
  input: ListResourceTypesCommandInput,
  ...rest: any[]
) => Paginator<ListResourceTypesCommandOutput> = createPaginator<
  RAMPaginationConfiguration,
  ListResourceTypesCommandInput,
  ListResourceTypesCommandOutput
>(RAMClient, ListResourceTypesCommand, "nextToken", "nextToken", "maxResults");
