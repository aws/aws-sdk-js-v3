// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListGroupingStatusesCommand,
  ListGroupingStatusesCommandInput,
  ListGroupingStatusesCommandOutput,
} from "../commands/ListGroupingStatusesCommand";
import { ResourceGroupsClient } from "../ResourceGroupsClient";
import { ResourceGroupsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGroupingStatuses: (
  config: ResourceGroupsPaginationConfiguration,
  input: ListGroupingStatusesCommandInput,
  ...rest: any[]
) => Paginator<ListGroupingStatusesCommandOutput> = createPaginator<
  ResourceGroupsPaginationConfiguration,
  ListGroupingStatusesCommandInput,
  ListGroupingStatusesCommandOutput
>(ResourceGroupsClient, ListGroupingStatusesCommand, "NextToken", "NextToken", "MaxResults");
