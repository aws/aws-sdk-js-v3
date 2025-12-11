// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSubscribersCommand,
  ListSubscribersCommandInput,
  ListSubscribersCommandOutput,
} from "../commands/ListSubscribersCommand";
import { SecurityLakeClient } from "../SecurityLakeClient";
import { SecurityLakePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSubscribers: (
  config: SecurityLakePaginationConfiguration,
  input: ListSubscribersCommandInput,
  ...rest: any[]
) => Paginator<ListSubscribersCommandOutput> = createPaginator<
  SecurityLakePaginationConfiguration,
  ListSubscribersCommandInput,
  ListSubscribersCommandOutput
>(SecurityLakeClient, ListSubscribersCommand, "nextToken", "nextToken", "maxResults");
