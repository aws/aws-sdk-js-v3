// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListExperimentsCommand,
  ListExperimentsCommandInput,
  ListExperimentsCommandOutput,
} from "../commands/ListExperimentsCommand";
import { EvidentlyClient } from "../EvidentlyClient";
import { EvidentlyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExperiments: (
  config: EvidentlyPaginationConfiguration,
  input: ListExperimentsCommandInput,
  ...rest: any[]
) => Paginator<ListExperimentsCommandOutput> = createPaginator<
  EvidentlyPaginationConfiguration,
  ListExperimentsCommandInput,
  ListExperimentsCommandOutput
>(EvidentlyClient, ListExperimentsCommand, "nextToken", "nextToken", "maxResults");
