// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEnvironmentVpcsCommand,
  ListEnvironmentVpcsCommandInput,
  ListEnvironmentVpcsCommandOutput,
} from "../commands/ListEnvironmentVpcsCommand";
import { MigrationHubRefactorSpacesClient } from "../MigrationHubRefactorSpacesClient";
import { MigrationHubRefactorSpacesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnvironmentVpcs: (
  config: MigrationHubRefactorSpacesPaginationConfiguration,
  input: ListEnvironmentVpcsCommandInput,
  ...rest: any[]
) => Paginator<ListEnvironmentVpcsCommandOutput> = createPaginator<
  MigrationHubRefactorSpacesPaginationConfiguration,
  ListEnvironmentVpcsCommandInput,
  ListEnvironmentVpcsCommandOutput
>(MigrationHubRefactorSpacesClient, ListEnvironmentVpcsCommand, "NextToken", "NextToken", "MaxResults");
