// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOrganizationsCommand,
  ListOrganizationsCommandInput,
  ListOrganizationsCommandOutput,
} from "../commands/ListOrganizationsCommand";
import { WorkMailClient } from "../WorkMailClient";
import { WorkMailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOrganizations: (
  config: WorkMailPaginationConfiguration,
  input: ListOrganizationsCommandInput,
  ...rest: any[]
) => Paginator<ListOrganizationsCommandOutput> = createPaginator<
  WorkMailPaginationConfiguration,
  ListOrganizationsCommandInput,
  ListOrganizationsCommandOutput
>(WorkMailClient, ListOrganizationsCommand, "NextToken", "NextToken", "MaxResults");
