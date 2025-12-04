// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSecurityProfileApplicationsCommand,
  ListSecurityProfileApplicationsCommandInput,
  ListSecurityProfileApplicationsCommandOutput,
} from "../commands/ListSecurityProfileApplicationsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSecurityProfileApplications: (
  config: ConnectPaginationConfiguration,
  input: ListSecurityProfileApplicationsCommandInput,
  ...rest: any[]
) => Paginator<ListSecurityProfileApplicationsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListSecurityProfileApplicationsCommandInput,
  ListSecurityProfileApplicationsCommandOutput
>(ConnectClient, ListSecurityProfileApplicationsCommand, "NextToken", "NextToken", "MaxResults");
