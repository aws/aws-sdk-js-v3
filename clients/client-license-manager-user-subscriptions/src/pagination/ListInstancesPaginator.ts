// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInstancesCommand,
  ListInstancesCommandInput,
  ListInstancesCommandOutput,
} from "../commands/ListInstancesCommand";
import { LicenseManagerUserSubscriptionsClient } from "../LicenseManagerUserSubscriptionsClient";
import { LicenseManagerUserSubscriptionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInstances: (
  config: LicenseManagerUserSubscriptionsPaginationConfiguration,
  input: ListInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListInstancesCommandOutput> = createPaginator<
  LicenseManagerUserSubscriptionsPaginationConfiguration,
  ListInstancesCommandInput,
  ListInstancesCommandOutput
>(LicenseManagerUserSubscriptionsClient, ListInstancesCommand, "NextToken", "NextToken", "MaxResults");
