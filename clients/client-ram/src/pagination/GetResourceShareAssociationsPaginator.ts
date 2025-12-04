// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetResourceShareAssociationsCommand,
  GetResourceShareAssociationsCommandInput,
  GetResourceShareAssociationsCommandOutput,
} from "../commands/GetResourceShareAssociationsCommand";
import { RAMClient } from "../RAMClient";
import { RAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetResourceShareAssociations: (
  config: RAMPaginationConfiguration,
  input: GetResourceShareAssociationsCommandInput,
  ...rest: any[]
) => Paginator<GetResourceShareAssociationsCommandOutput> = createPaginator<
  RAMPaginationConfiguration,
  GetResourceShareAssociationsCommandInput,
  GetResourceShareAssociationsCommandOutput
>(RAMClient, GetResourceShareAssociationsCommand, "nextToken", "nextToken", "maxResults");
