// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFormTypesCommand,
  ListFormTypesCommandInput,
  ListFormTypesCommandOutput,
} from "../commands/ListFormTypesCommand";
import { GlueClient } from "../GlueClient";
import type { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFormTypes: (
  config: GluePaginationConfiguration,
  input: ListFormTypesCommandInput,
  ...rest: any[]
) => Paginator<ListFormTypesCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListFormTypesCommandInput,
  ListFormTypesCommandOutput
>(GlueClient, ListFormTypesCommand, "NextToken", "NextToken", "MaxResults");
