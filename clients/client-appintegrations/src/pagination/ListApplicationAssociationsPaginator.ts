// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppIntegrationsClient } from "../AppIntegrationsClient";
import {
  ListApplicationAssociationsCommand,
  ListApplicationAssociationsCommandInput,
  ListApplicationAssociationsCommandOutput,
} from "../commands/ListApplicationAssociationsCommand";
import { AppIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplicationAssociations: (
  config: AppIntegrationsPaginationConfiguration,
  input: ListApplicationAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationAssociationsCommandOutput> = createPaginator<
  AppIntegrationsPaginationConfiguration,
  ListApplicationAssociationsCommandInput,
  ListApplicationAssociationsCommandOutput
>(AppIntegrationsClient, ListApplicationAssociationsCommand, "NextToken", "NextToken", "MaxResults");
