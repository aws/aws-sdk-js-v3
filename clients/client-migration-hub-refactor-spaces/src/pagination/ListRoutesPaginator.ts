// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListRoutesCommand, ListRoutesCommandInput, ListRoutesCommandOutput } from "../commands/ListRoutesCommand";
import { MigrationHubRefactorSpacesClient } from "../MigrationHubRefactorSpacesClient";
import { MigrationHubRefactorSpacesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRoutes: (
  config: MigrationHubRefactorSpacesPaginationConfiguration,
  input: ListRoutesCommandInput,
  ...rest: any[]
) => Paginator<ListRoutesCommandOutput> = createPaginator<
  MigrationHubRefactorSpacesPaginationConfiguration,
  ListRoutesCommandInput,
  ListRoutesCommandOutput
>(MigrationHubRefactorSpacesClient, ListRoutesCommand, "NextToken", "NextToken", "MaxResults");
