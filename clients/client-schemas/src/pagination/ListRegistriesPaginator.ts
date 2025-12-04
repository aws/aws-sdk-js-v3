// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRegistriesCommand,
  ListRegistriesCommandInput,
  ListRegistriesCommandOutput,
} from "../commands/ListRegistriesCommand";
import { SchemasClient } from "../SchemasClient";
import { SchemasPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRegistries: (
  config: SchemasPaginationConfiguration,
  input: ListRegistriesCommandInput,
  ...rest: any[]
) => Paginator<ListRegistriesCommandOutput> = createPaginator<
  SchemasPaginationConfiguration,
  ListRegistriesCommandInput,
  ListRegistriesCommandOutput
>(SchemasClient, ListRegistriesCommand, "NextToken", "NextToken", "Limit");
