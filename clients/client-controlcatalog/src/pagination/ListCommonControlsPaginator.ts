// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCommonControlsCommand,
  ListCommonControlsCommandInput,
  ListCommonControlsCommandOutput,
} from "../commands/ListCommonControlsCommand";
import { ControlCatalogClient } from "../ControlCatalogClient";
import { ControlCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCommonControls: (
  config: ControlCatalogPaginationConfiguration,
  input: ListCommonControlsCommandInput,
  ...rest: any[]
) => Paginator<ListCommonControlsCommandOutput> = createPaginator<
  ControlCatalogPaginationConfiguration,
  ListCommonControlsCommandInput,
  ListCommonControlsCommandOutput
>(ControlCatalogClient, ListCommonControlsCommand, "NextToken", "NextToken", "MaxResults");
