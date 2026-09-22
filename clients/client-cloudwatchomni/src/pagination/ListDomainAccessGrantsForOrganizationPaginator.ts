// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchOmniClient } from "../CloudWatchOmniClient";
import {
  ListDomainAccessGrantsForOrganizationCommand,
  ListDomainAccessGrantsForOrganizationCommandInput,
  ListDomainAccessGrantsForOrganizationCommandOutput,
} from "../commands/ListDomainAccessGrantsForOrganizationCommand";
import type { CloudWatchOmniPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDomainAccessGrantsForOrganization: (
  config: CloudWatchOmniPaginationConfiguration,
  input: ListDomainAccessGrantsForOrganizationCommandInput,
  ...rest: any[]
) => Paginator<ListDomainAccessGrantsForOrganizationCommandOutput> = createPaginator<
  CloudWatchOmniPaginationConfiguration,
  ListDomainAccessGrantsForOrganizationCommandInput,
  ListDomainAccessGrantsForOrganizationCommandOutput
>(CloudWatchOmniClient, ListDomainAccessGrantsForOrganizationCommand, "nextToken", "nextToken", "maxResults");
