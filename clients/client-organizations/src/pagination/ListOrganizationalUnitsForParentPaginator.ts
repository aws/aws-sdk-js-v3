// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOrganizationalUnitsForParentCommand,
  ListOrganizationalUnitsForParentCommandInput,
  ListOrganizationalUnitsForParentCommandOutput,
} from "../commands/ListOrganizationalUnitsForParentCommand";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOrganizationalUnitsForParent: (
  config: OrganizationsPaginationConfiguration,
  input: ListOrganizationalUnitsForParentCommandInput,
  ...rest: any[]
) => Paginator<ListOrganizationalUnitsForParentCommandOutput> = createPaginator<
  OrganizationsPaginationConfiguration,
  ListOrganizationalUnitsForParentCommandInput,
  ListOrganizationalUnitsForParentCommandOutput
>(OrganizationsClient, ListOrganizationalUnitsForParentCommand, "NextToken", "NextToken", "MaxResults");
