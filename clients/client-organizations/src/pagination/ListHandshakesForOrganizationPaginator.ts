// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListHandshakesForOrganizationCommand,
  ListHandshakesForOrganizationCommandInput,
  ListHandshakesForOrganizationCommandOutput,
} from "../commands/ListHandshakesForOrganizationCommand";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHandshakesForOrganization: (
  config: OrganizationsPaginationConfiguration,
  input: ListHandshakesForOrganizationCommandInput,
  ...rest: any[]
) => Paginator<ListHandshakesForOrganizationCommandOutput> = createPaginator<
  OrganizationsPaginationConfiguration,
  ListHandshakesForOrganizationCommandInput,
  ListHandshakesForOrganizationCommandOutput
>(OrganizationsClient, ListHandshakesForOrganizationCommand, "NextToken", "NextToken", "MaxResults");
