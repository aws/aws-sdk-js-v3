// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSecurityControlDefinitionsCommand,
  ListSecurityControlDefinitionsCommandInput,
  ListSecurityControlDefinitionsCommandOutput,
} from "../commands/ListSecurityControlDefinitionsCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSecurityControlDefinitions: (
  config: SecurityHubPaginationConfiguration,
  input: ListSecurityControlDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<ListSecurityControlDefinitionsCommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  ListSecurityControlDefinitionsCommandInput,
  ListSecurityControlDefinitionsCommandOutput
>(SecurityHubClient, ListSecurityControlDefinitionsCommand, "NextToken", "NextToken", "MaxResults");
