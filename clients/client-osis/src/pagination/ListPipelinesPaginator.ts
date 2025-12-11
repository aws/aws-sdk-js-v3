// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPipelinesCommand,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput,
} from "../commands/ListPipelinesCommand";
import { OSISClient } from "../OSISClient";
import { OSISPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPipelines: (
  config: OSISPaginationConfiguration,
  input: ListPipelinesCommandInput,
  ...rest: any[]
) => Paginator<ListPipelinesCommandOutput> = createPaginator<
  OSISPaginationConfiguration,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput
>(OSISClient, ListPipelinesCommand, "NextToken", "NextToken", "MaxResults");
