// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRegistriesCommand,
  ListRegistriesCommandInput,
  ListRegistriesCommandOutput,
} from "../commands/ListRegistriesCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRegistries: (
  config: GluePaginationConfiguration,
  input: ListRegistriesCommandInput,
  ...rest: any[]
) => Paginator<ListRegistriesCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListRegistriesCommandInput,
  ListRegistriesCommandOutput
>(GlueClient, ListRegistriesCommand, "NextToken", "NextToken", "MaxResults");
