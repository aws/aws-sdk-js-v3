// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListComponentOutputsCommand,
  ListComponentOutputsCommandInput,
  ListComponentOutputsCommandOutput,
} from "../commands/ListComponentOutputsCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListComponentOutputs: (
  config: ProtonPaginationConfiguration,
  input: ListComponentOutputsCommandInput,
  ...rest: any[]
) => Paginator<ListComponentOutputsCommandOutput> = createPaginator<
  ProtonPaginationConfiguration,
  ListComponentOutputsCommandInput,
  ListComponentOutputsCommandOutput
>(ProtonClient, ListComponentOutputsCommand, "nextToken", "nextToken", "");
