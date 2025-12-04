// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCustomEntityTypesCommand,
  ListCustomEntityTypesCommandInput,
  ListCustomEntityTypesCommandOutput,
} from "../commands/ListCustomEntityTypesCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomEntityTypes: (
  config: GluePaginationConfiguration,
  input: ListCustomEntityTypesCommandInput,
  ...rest: any[]
) => Paginator<ListCustomEntityTypesCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListCustomEntityTypesCommandInput,
  ListCustomEntityTypesCommandOutput
>(GlueClient, ListCustomEntityTypesCommand, "NextToken", "NextToken", "MaxResults");
