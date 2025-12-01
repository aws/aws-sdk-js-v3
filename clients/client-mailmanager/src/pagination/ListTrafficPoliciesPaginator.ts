// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTrafficPoliciesCommand,
  ListTrafficPoliciesCommandInput,
  ListTrafficPoliciesCommandOutput,
} from "../commands/ListTrafficPoliciesCommand";
import { MailManagerClient } from "../MailManagerClient";
import { MailManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrafficPolicies: (
  config: MailManagerPaginationConfiguration,
  input: ListTrafficPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListTrafficPoliciesCommandOutput> = createPaginator<
  MailManagerPaginationConfiguration,
  ListTrafficPoliciesCommandInput,
  ListTrafficPoliciesCommandOutput
>(MailManagerClient, ListTrafficPoliciesCommand, "NextToken", "NextToken", "PageSize");
