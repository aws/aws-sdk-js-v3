// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEnvironmentsCommand,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
} from "../commands/ListEnvironmentsCommand";
import { MigrationHubRefactorSpacesClient } from "../MigrationHubRefactorSpacesClient";
import { MigrationHubRefactorSpacesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnvironments: (
  config: MigrationHubRefactorSpacesPaginationConfiguration,
  input: ListEnvironmentsCommandInput,
  ...rest: any[]
) => Paginator<ListEnvironmentsCommandOutput> = createPaginator<
  MigrationHubRefactorSpacesPaginationConfiguration,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput
>(MigrationHubRefactorSpacesClient, ListEnvironmentsCommand, "NextToken", "NextToken", "MaxResults");
