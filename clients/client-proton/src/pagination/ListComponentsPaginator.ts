// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListComponentsCommand,
  ListComponentsCommandInput,
  ListComponentsCommandOutput,
} from "../commands/ListComponentsCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListComponents: (
  config: ProtonPaginationConfiguration,
  input: ListComponentsCommandInput,
  ...rest: any[]
) => Paginator<ListComponentsCommandOutput> = createPaginator<
  ProtonPaginationConfiguration,
  ListComponentsCommandInput,
  ListComponentsCommandOutput
>(ProtonClient, ListComponentsCommand, "nextToken", "nextToken", "maxResults");
