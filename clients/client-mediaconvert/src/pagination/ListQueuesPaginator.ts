// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListQueuesCommand, ListQueuesCommandInput, ListQueuesCommandOutput } from "../commands/ListQueuesCommand";
import { MediaConvertClient } from "../MediaConvertClient";
import { MediaConvertPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQueues: (
  config: MediaConvertPaginationConfiguration,
  input: ListQueuesCommandInput,
  ...rest: any[]
) => Paginator<ListQueuesCommandOutput> = createPaginator<
  MediaConvertPaginationConfiguration,
  ListQueuesCommandInput,
  ListQueuesCommandOutput
>(MediaConvertClient, ListQueuesCommand, "NextToken", "NextToken", "MaxResults");
