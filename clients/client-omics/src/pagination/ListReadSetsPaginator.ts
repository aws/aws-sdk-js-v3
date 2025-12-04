// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReadSetsCommand,
  ListReadSetsCommandInput,
  ListReadSetsCommandOutput,
} from "../commands/ListReadSetsCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReadSets: (
  config: OmicsPaginationConfiguration,
  input: ListReadSetsCommandInput,
  ...rest: any[]
) => Paginator<ListReadSetsCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListReadSetsCommandInput,
  ListReadSetsCommandOutput
>(OmicsClient, ListReadSetsCommand, "nextToken", "nextToken", "maxResults");
