// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListControlMappingsCommand,
  ListControlMappingsCommandInput,
  ListControlMappingsCommandOutput,
} from "../commands/ListControlMappingsCommand";
import { ControlCatalogClient } from "../ControlCatalogClient";
import { ControlCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListControlMappings: (
  config: ControlCatalogPaginationConfiguration,
  input: ListControlMappingsCommandInput,
  ...rest: any[]
) => Paginator<ListControlMappingsCommandOutput> = createPaginator<
  ControlCatalogPaginationConfiguration,
  ListControlMappingsCommandInput,
  ListControlMappingsCommandOutput
>(ControlCatalogClient, ListControlMappingsCommand, "NextToken", "NextToken", "MaxResults");
