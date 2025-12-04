// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServiceInstancesCommand,
  ListServiceInstancesCommandInput,
  ListServiceInstancesCommandOutput,
} from "../commands/ListServiceInstancesCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceInstances: (
  config: ProtonPaginationConfiguration,
  input: ListServiceInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListServiceInstancesCommandOutput> = createPaginator<
  ProtonPaginationConfiguration,
  ListServiceInstancesCommandInput,
  ListServiceInstancesCommandOutput
>(ProtonClient, ListServiceInstancesCommand, "nextToken", "nextToken", "maxResults");
