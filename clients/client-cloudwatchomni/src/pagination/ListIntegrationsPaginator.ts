// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchOmniClient } from "../CloudWatchOmniClient";
import {
  ListIntegrationsCommand,
  ListIntegrationsCommandInput,
  ListIntegrationsCommandOutput,
} from "../commands/ListIntegrationsCommand";
import type { CloudWatchOmniPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIntegrations: (
  config: CloudWatchOmniPaginationConfiguration,
  input: ListIntegrationsCommandInput,
  ...rest: any[]
) => Paginator<ListIntegrationsCommandOutput> = createPaginator<
  CloudWatchOmniPaginationConfiguration,
  ListIntegrationsCommandInput,
  ListIntegrationsCommandOutput
>(CloudWatchOmniClient, ListIntegrationsCommand, "nextToken", "nextToken", "maxResults");
