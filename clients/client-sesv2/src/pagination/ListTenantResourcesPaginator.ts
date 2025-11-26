// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTenantResourcesCommand,
  ListTenantResourcesCommandInput,
  ListTenantResourcesCommandOutput,
} from "../commands/ListTenantResourcesCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTenantResources: (
  config: SESv2PaginationConfiguration,
  input: ListTenantResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListTenantResourcesCommandOutput> = createPaginator<
  SESv2PaginationConfiguration,
  ListTenantResourcesCommandInput,
  ListTenantResourcesCommandOutput
>(SESv2Client, ListTenantResourcesCommand, "NextToken", "NextToken", "PageSize");
