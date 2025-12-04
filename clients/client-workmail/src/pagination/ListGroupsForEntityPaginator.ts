// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGroupsForEntityCommand,
  ListGroupsForEntityCommandInput,
  ListGroupsForEntityCommandOutput,
} from "../commands/ListGroupsForEntityCommand";
import { WorkMailClient } from "../WorkMailClient";
import { WorkMailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGroupsForEntity: (
  config: WorkMailPaginationConfiguration,
  input: ListGroupsForEntityCommandInput,
  ...rest: any[]
) => Paginator<ListGroupsForEntityCommandOutput> = createPaginator<
  WorkMailPaginationConfiguration,
  ListGroupsForEntityCommandInput,
  ListGroupsForEntityCommandOutput
>(WorkMailClient, ListGroupsForEntityCommand, "NextToken", "NextToken", "MaxResults");
