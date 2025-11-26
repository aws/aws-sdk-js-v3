// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContainerInstancesCommand,
  ListContainerInstancesCommandInput,
  ListContainerInstancesCommandOutput,
} from "../commands/ListContainerInstancesCommand";
import { ECSClient } from "../ECSClient";
import { ECSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContainerInstances: (
  config: ECSPaginationConfiguration,
  input: ListContainerInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListContainerInstancesCommandOutput> = createPaginator<
  ECSPaginationConfiguration,
  ListContainerInstancesCommandInput,
  ListContainerInstancesCommandOutput
>(ECSClient, ListContainerInstancesCommand, "nextToken", "nextToken", "maxResults");
