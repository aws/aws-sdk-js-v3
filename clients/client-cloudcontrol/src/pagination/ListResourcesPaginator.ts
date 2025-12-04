// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudControlClient } from "../CloudControlClient";
import {
  ListResourcesCommand,
  ListResourcesCommandInput,
  ListResourcesCommandOutput,
} from "../commands/ListResourcesCommand";
import { CloudControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResources: (
  config: CloudControlPaginationConfiguration,
  input: ListResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListResourcesCommandOutput> = createPaginator<
  CloudControlPaginationConfiguration,
  ListResourcesCommandInput,
  ListResourcesCommandOutput
>(CloudControlClient, ListResourcesCommand, "NextToken", "NextToken", "MaxResults");
