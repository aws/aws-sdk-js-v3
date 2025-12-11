// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServicesCommand,
  ListServicesCommandInput,
  ListServicesCommandOutput,
} from "../commands/ListServicesCommand";
import { ECSClient } from "../ECSClient";
import { ECSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServices: (
  config: ECSPaginationConfiguration,
  input: ListServicesCommandInput,
  ...rest: any[]
) => Paginator<ListServicesCommandOutput> = createPaginator<
  ECSPaginationConfiguration,
  ListServicesCommandInput,
  ListServicesCommandOutput
>(ECSClient, ListServicesCommand, "nextToken", "nextToken", "maxResults");
