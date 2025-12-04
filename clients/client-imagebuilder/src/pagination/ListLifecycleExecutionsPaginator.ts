// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLifecycleExecutionsCommand,
  ListLifecycleExecutionsCommandInput,
  ListLifecycleExecutionsCommandOutput,
} from "../commands/ListLifecycleExecutionsCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLifecycleExecutions: (
  config: ImagebuilderPaginationConfiguration,
  input: ListLifecycleExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListLifecycleExecutionsCommandOutput> = createPaginator<
  ImagebuilderPaginationConfiguration,
  ListLifecycleExecutionsCommandInput,
  ListLifecycleExecutionsCommandOutput
>(ImagebuilderClient, ListLifecycleExecutionsCommand, "nextToken", "nextToken", "maxResults");
