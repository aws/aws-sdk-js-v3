// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAWSServiceAccessForOrganizationCommand,
  ListAWSServiceAccessForOrganizationCommandInput,
  ListAWSServiceAccessForOrganizationCommandOutput,
} from "../commands/ListAWSServiceAccessForOrganizationCommand";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAWSServiceAccessForOrganization: (
  config: OrganizationsPaginationConfiguration,
  input: ListAWSServiceAccessForOrganizationCommandInput,
  ...rest: any[]
) => Paginator<ListAWSServiceAccessForOrganizationCommandOutput> = createPaginator<
  OrganizationsPaginationConfiguration,
  ListAWSServiceAccessForOrganizationCommandInput,
  ListAWSServiceAccessForOrganizationCommandOutput
>(OrganizationsClient, ListAWSServiceAccessForOrganizationCommand, "NextToken", "NextToken", "MaxResults");
