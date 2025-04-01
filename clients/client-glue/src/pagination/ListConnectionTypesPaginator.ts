// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListConnectionTypesCommand,
  ListConnectionTypesCommandInput,
  ListConnectionTypesCommandOutput,
} from "../commands/ListConnectionTypesCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnectionTypes: (
  config: GluePaginationConfiguration,
  input: ListConnectionTypesCommandInput,
  ...rest: any[]
) => Paginator<ListConnectionTypesCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListConnectionTypesCommandInput,
  ListConnectionTypesCommandOutput
>(GlueClient, ListConnectionTypesCommand, "NextToken", "NextToken", "MaxResults");
