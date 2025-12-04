// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListExecutionsCommand,
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput,
} from "../commands/ListExecutionsCommand";
import { SFNClient } from "../SFNClient";
import { SFNPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExecutions: (
  config: SFNPaginationConfiguration,
  input: ListExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListExecutionsCommandOutput> = createPaginator<
  SFNPaginationConfiguration,
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput
>(SFNClient, ListExecutionsCommand, "nextToken", "nextToken", "maxResults");
