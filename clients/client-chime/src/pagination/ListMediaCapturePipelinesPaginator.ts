// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListMediaCapturePipelinesCommand,
  ListMediaCapturePipelinesCommandInput,
  ListMediaCapturePipelinesCommandOutput,
} from "../commands/ListMediaCapturePipelinesCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMediaCapturePipelines: (
  config: ChimePaginationConfiguration,
  input: ListMediaCapturePipelinesCommandInput,
  ...rest: any[]
) => Paginator<ListMediaCapturePipelinesCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListMediaCapturePipelinesCommandInput,
  ListMediaCapturePipelinesCommandOutput
>(ChimeClient, ListMediaCapturePipelinesCommand, "NextToken", "NextToken", "MaxResults");
