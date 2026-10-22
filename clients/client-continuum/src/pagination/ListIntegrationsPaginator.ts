// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIntegrationsCommand,
  ListIntegrationsCommandInput,
  ListIntegrationsCommandOutput,
} from "../commands/ListIntegrationsCommand";
import { ContinuumClient } from "../ContinuumClient";
import type { ContinuumPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIntegrations: (
  config: ContinuumPaginationConfiguration,
  input: ListIntegrationsCommandInput,
  ...rest: any[]
) => Paginator<ListIntegrationsCommandOutput> = createPaginator<
  ContinuumPaginationConfiguration,
  ListIntegrationsCommandInput,
  ListIntegrationsCommandOutput
>(ContinuumClient, ListIntegrationsCommand, "nextToken", "nextToken", "maxResults");
