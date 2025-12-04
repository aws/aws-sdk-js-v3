// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { B2biClient } from "../B2biClient";
import {
  ListTransformersCommand,
  ListTransformersCommandInput,
  ListTransformersCommandOutput,
} from "../commands/ListTransformersCommand";
import { B2biPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTransformers: (
  config: B2biPaginationConfiguration,
  input: ListTransformersCommandInput,
  ...rest: any[]
) => Paginator<ListTransformersCommandOutput> = createPaginator<
  B2biPaginationConfiguration,
  ListTransformersCommandInput,
  ListTransformersCommandOutput
>(B2biClient, ListTransformersCommand, "nextToken", "nextToken", "maxResults");
