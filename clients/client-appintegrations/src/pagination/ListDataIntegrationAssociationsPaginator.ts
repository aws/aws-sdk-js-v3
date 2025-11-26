// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppIntegrationsClient } from "../AppIntegrationsClient";
import {
  ListDataIntegrationAssociationsCommand,
  ListDataIntegrationAssociationsCommandInput,
  ListDataIntegrationAssociationsCommandOutput,
} from "../commands/ListDataIntegrationAssociationsCommand";
import { AppIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataIntegrationAssociations: (
  config: AppIntegrationsPaginationConfiguration,
  input: ListDataIntegrationAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListDataIntegrationAssociationsCommandOutput> = createPaginator<
  AppIntegrationsPaginationConfiguration,
  ListDataIntegrationAssociationsCommandInput,
  ListDataIntegrationAssociationsCommandOutput
>(AppIntegrationsClient, ListDataIntegrationAssociationsCommand, "NextToken", "NextToken", "MaxResults");
