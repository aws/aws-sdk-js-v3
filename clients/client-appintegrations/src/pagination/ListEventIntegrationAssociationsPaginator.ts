// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppIntegrationsClient } from "../AppIntegrationsClient";
import {
  ListEventIntegrationAssociationsCommand,
  ListEventIntegrationAssociationsCommandInput,
  ListEventIntegrationAssociationsCommandOutput,
} from "../commands/ListEventIntegrationAssociationsCommand";
import { AppIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEventIntegrationAssociations: (
  config: AppIntegrationsPaginationConfiguration,
  input: ListEventIntegrationAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListEventIntegrationAssociationsCommandOutput> = createPaginator<
  AppIntegrationsPaginationConfiguration,
  ListEventIntegrationAssociationsCommandInput,
  ListEventIntegrationAssociationsCommandOutput
>(AppIntegrationsClient, ListEventIntegrationAssociationsCommand, "NextToken", "NextToken", "MaxResults");
