// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGlossariesCommand,
  ListGlossariesCommandInput,
  ListGlossariesCommandOutput,
} from "../commands/ListGlossariesCommand";
import { GlueClient } from "../GlueClient";
import type { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGlossaries: (
  config: GluePaginationConfiguration,
  input: ListGlossariesCommandInput,
  ...rest: any[]
) => Paginator<ListGlossariesCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListGlossariesCommandInput,
  ListGlossariesCommandOutput
>(GlueClient, ListGlossariesCommand, "NextToken", "NextToken", "MaxResults");
