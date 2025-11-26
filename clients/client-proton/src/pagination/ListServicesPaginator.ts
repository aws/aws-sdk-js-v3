// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServicesCommand,
  ListServicesCommandInput,
  ListServicesCommandOutput,
} from "../commands/ListServicesCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServices: (
  config: ProtonPaginationConfiguration,
  input: ListServicesCommandInput,
  ...rest: any[]
) => Paginator<ListServicesCommandOutput> = createPaginator<
  ProtonPaginationConfiguration,
  ListServicesCommandInput,
  ListServicesCommandOutput
>(ProtonClient, ListServicesCommand, "nextToken", "nextToken", "maxResults");
