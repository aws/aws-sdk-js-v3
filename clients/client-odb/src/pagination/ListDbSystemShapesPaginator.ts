// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDbSystemShapesCommand,
  ListDbSystemShapesCommandInput,
  ListDbSystemShapesCommandOutput,
} from "../commands/ListDbSystemShapesCommand";
import { OdbClient } from "../OdbClient";
import { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDbSystemShapes: (
  config: OdbPaginationConfiguration,
  input: ListDbSystemShapesCommandInput,
  ...rest: any[]
) => Paginator<ListDbSystemShapesCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListDbSystemShapesCommandInput,
  ListDbSystemShapesCommandOutput
>(OdbClient, ListDbSystemShapesCommand, "nextToken", "nextToken", "maxResults");
