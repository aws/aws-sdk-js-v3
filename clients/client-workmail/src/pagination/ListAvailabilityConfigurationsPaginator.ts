// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAvailabilityConfigurationsCommand,
  ListAvailabilityConfigurationsCommandInput,
  ListAvailabilityConfigurationsCommandOutput,
} from "../commands/ListAvailabilityConfigurationsCommand";
import { WorkMailClient } from "../WorkMailClient";
import { WorkMailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAvailabilityConfigurations: (
  config: WorkMailPaginationConfiguration,
  input: ListAvailabilityConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListAvailabilityConfigurationsCommandOutput> = createPaginator<
  WorkMailPaginationConfiguration,
  ListAvailabilityConfigurationsCommandInput,
  ListAvailabilityConfigurationsCommandOutput
>(WorkMailClient, ListAvailabilityConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
