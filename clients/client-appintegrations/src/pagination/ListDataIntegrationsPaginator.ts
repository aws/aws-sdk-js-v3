// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppIntegrationsClient } from "../AppIntegrationsClient";
import {
  ListDataIntegrationsCommand,
  ListDataIntegrationsCommandInput,
  ListDataIntegrationsCommandOutput,
} from "../commands/ListDataIntegrationsCommand";
import { AppIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataIntegrations: (
  config: AppIntegrationsPaginationConfiguration,
  input: ListDataIntegrationsCommandInput,
  ...rest: any[]
) => Paginator<ListDataIntegrationsCommandOutput> = createPaginator<
  AppIntegrationsPaginationConfiguration,
  ListDataIntegrationsCommandInput,
  ListDataIntegrationsCommandOutput
>(AppIntegrationsClient, ListDataIntegrationsCommand, "NextToken", "NextToken", "MaxResults");
