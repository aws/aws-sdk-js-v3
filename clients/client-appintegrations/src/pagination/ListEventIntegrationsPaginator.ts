// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppIntegrationsClient } from "../AppIntegrationsClient";
import {
  ListEventIntegrationsCommand,
  ListEventIntegrationsCommandInput,
  ListEventIntegrationsCommandOutput,
} from "../commands/ListEventIntegrationsCommand";
import { AppIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEventIntegrations: (
  config: AppIntegrationsPaginationConfiguration,
  input: ListEventIntegrationsCommandInput,
  ...rest: any[]
) => Paginator<ListEventIntegrationsCommandOutput> = createPaginator<
  AppIntegrationsPaginationConfiguration,
  ListEventIntegrationsCommandInput,
  ListEventIntegrationsCommandOutput
>(AppIntegrationsClient, ListEventIntegrationsCommand, "NextToken", "NextToken", "MaxResults");
