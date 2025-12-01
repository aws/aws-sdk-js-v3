// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAdminsManagingAccountCommand,
  ListAdminsManagingAccountCommandInput,
  ListAdminsManagingAccountCommandOutput,
} from "../commands/ListAdminsManagingAccountCommand";
import { FMSClient } from "../FMSClient";
import { FMSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAdminsManagingAccount: (
  config: FMSPaginationConfiguration,
  input: ListAdminsManagingAccountCommandInput,
  ...rest: any[]
) => Paginator<ListAdminsManagingAccountCommandOutput> = createPaginator<
  FMSPaginationConfiguration,
  ListAdminsManagingAccountCommandInput,
  ListAdminsManagingAccountCommandOutput
>(FMSClient, ListAdminsManagingAccountCommand, "NextToken", "NextToken", "MaxResults");
