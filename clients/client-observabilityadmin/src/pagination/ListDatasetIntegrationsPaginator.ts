// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatasetIntegrationsCommand,
  ListDatasetIntegrationsCommandInput,
  ListDatasetIntegrationsCommandOutput,
} from "../commands/ListDatasetIntegrationsCommand";
import { ObservabilityAdminClient } from "../ObservabilityAdminClient";
import type { ObservabilityAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasetIntegrations: (
  config: ObservabilityAdminPaginationConfiguration,
  input: ListDatasetIntegrationsCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetIntegrationsCommandOutput> = createPaginator<
  ObservabilityAdminPaginationConfiguration,
  ListDatasetIntegrationsCommandInput,
  ListDatasetIntegrationsCommandOutput
>(ObservabilityAdminClient, ListDatasetIntegrationsCommand, "NextToken", "NextToken", "MaxResults");
