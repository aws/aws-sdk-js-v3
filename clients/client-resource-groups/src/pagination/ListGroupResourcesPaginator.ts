// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGroupResourcesCommand,
  ListGroupResourcesCommandInput,
  ListGroupResourcesCommandOutput,
} from "../commands/ListGroupResourcesCommand";
import { ResourceGroupsClient } from "../ResourceGroupsClient";
import { ResourceGroupsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGroupResources: (
  config: ResourceGroupsPaginationConfiguration,
  input: ListGroupResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListGroupResourcesCommandOutput> = createPaginator<
  ResourceGroupsPaginationConfiguration,
  ListGroupResourcesCommandInput,
  ListGroupResourcesCommandOutput
>(ResourceGroupsClient, ListGroupResourcesCommand, "NextToken", "NextToken", "MaxResults");
