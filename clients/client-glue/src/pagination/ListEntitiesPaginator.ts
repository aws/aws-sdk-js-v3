// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListEntitiesCommand,
  ListEntitiesCommandInput,
  ListEntitiesCommandOutput,
} from "../commands/ListEntitiesCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEntities: (
  config: GluePaginationConfiguration,
  input: ListEntitiesCommandInput,
  ...rest: any[]
) => Paginator<ListEntitiesCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListEntitiesCommandInput,
  ListEntitiesCommandOutput
>(GlueClient, ListEntitiesCommand, "NextToken", "NextToken", "");
