// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLinuxSubscriptionInstancesCommand,
  ListLinuxSubscriptionInstancesCommandInput,
  ListLinuxSubscriptionInstancesCommandOutput,
} from "../commands/ListLinuxSubscriptionInstancesCommand";
import { LicenseManagerLinuxSubscriptionsClient } from "../LicenseManagerLinuxSubscriptionsClient";
import { LicenseManagerLinuxSubscriptionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLinuxSubscriptionInstances: (
  config: LicenseManagerLinuxSubscriptionsPaginationConfiguration,
  input: ListLinuxSubscriptionInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListLinuxSubscriptionInstancesCommandOutput> = createPaginator<
  LicenseManagerLinuxSubscriptionsPaginationConfiguration,
  ListLinuxSubscriptionInstancesCommandInput,
  ListLinuxSubscriptionInstancesCommandOutput
>(
  LicenseManagerLinuxSubscriptionsClient,
  ListLinuxSubscriptionInstancesCommand,
  "NextToken",
  "NextToken",
  "MaxResults"
);
