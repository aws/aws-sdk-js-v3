// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListControlsCommand,
  ListControlsCommandInput,
  ListControlsCommandOutput,
} from "../commands/ListControlsCommand";
import { ControlCatalogClient } from "../ControlCatalogClient";
import { ControlCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListControls: (
  config: ControlCatalogPaginationConfiguration,
  input: ListControlsCommandInput,
  ...rest: any[]
) => Paginator<ListControlsCommandOutput> = createPaginator<
  ControlCatalogPaginationConfiguration,
  ListControlsCommandInput,
  ListControlsCommandOutput
>(ControlCatalogClient, ListControlsCommand, "NextToken", "NextToken", "MaxResults");
