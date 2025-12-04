// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AthenaClient } from "../AthenaClient";
import {
  ListDataCatalogsCommand,
  ListDataCatalogsCommandInput,
  ListDataCatalogsCommandOutput,
} from "../commands/ListDataCatalogsCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataCatalogs: (
  config: AthenaPaginationConfiguration,
  input: ListDataCatalogsCommandInput,
  ...rest: any[]
) => Paginator<ListDataCatalogsCommandOutput> = createPaginator<
  AthenaPaginationConfiguration,
  ListDataCatalogsCommandInput,
  ListDataCatalogsCommandOutput
>(AthenaClient, ListDataCatalogsCommand, "NextToken", "NextToken", "MaxResults");
