// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTrustedTokenIssuersCommand,
  ListTrustedTokenIssuersCommandInput,
  ListTrustedTokenIssuersCommandOutput,
} from "../commands/ListTrustedTokenIssuersCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrustedTokenIssuers: (
  config: SSOAdminPaginationConfiguration,
  input: ListTrustedTokenIssuersCommandInput,
  ...rest: any[]
) => Paginator<ListTrustedTokenIssuersCommandOutput> = createPaginator<
  SSOAdminPaginationConfiguration,
  ListTrustedTokenIssuersCommandInput,
  ListTrustedTokenIssuersCommandOutput
>(SSOAdminClient, ListTrustedTokenIssuersCommand, "NextToken", "NextToken", "MaxResults");
