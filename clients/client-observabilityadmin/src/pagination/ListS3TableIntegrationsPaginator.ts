// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListS3TableIntegrationsCommand,
  ListS3TableIntegrationsCommandInput,
  ListS3TableIntegrationsCommandOutput,
} from "../commands/ListS3TableIntegrationsCommand";
import { ObservabilityAdminClient } from "../ObservabilityAdminClient";
import { ObservabilityAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListS3TableIntegrations: (
  config: ObservabilityAdminPaginationConfiguration,
  input: ListS3TableIntegrationsCommandInput,
  ...rest: any[]
) => Paginator<ListS3TableIntegrationsCommandOutput> = createPaginator<
  ObservabilityAdminPaginationConfiguration,
  ListS3TableIntegrationsCommandInput,
  ListS3TableIntegrationsCommandOutput
>(ObservabilityAdminClient, ListS3TableIntegrationsCommand, "NextToken", "NextToken", "MaxResults");
