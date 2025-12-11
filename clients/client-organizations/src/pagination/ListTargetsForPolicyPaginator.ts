// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTargetsForPolicyCommand,
  ListTargetsForPolicyCommandInput,
  ListTargetsForPolicyCommandOutput,
} from "../commands/ListTargetsForPolicyCommand";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTargetsForPolicy: (
  config: OrganizationsPaginationConfiguration,
  input: ListTargetsForPolicyCommandInput,
  ...rest: any[]
) => Paginator<ListTargetsForPolicyCommandOutput> = createPaginator<
  OrganizationsPaginationConfiguration,
  ListTargetsForPolicyCommandInput,
  ListTargetsForPolicyCommandOutput
>(OrganizationsClient, ListTargetsForPolicyCommand, "NextToken", "NextToken", "MaxResults");
