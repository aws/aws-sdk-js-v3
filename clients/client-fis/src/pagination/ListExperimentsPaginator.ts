// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListExperimentsCommand,
  ListExperimentsCommandInput,
  ListExperimentsCommandOutput,
} from "../commands/ListExperimentsCommand";
import { FisClient } from "../FisClient";
import { FisPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExperiments: (
  config: FisPaginationConfiguration,
  input: ListExperimentsCommandInput,
  ...rest: any[]
) => Paginator<ListExperimentsCommandOutput> = createPaginator<
  FisPaginationConfiguration,
  ListExperimentsCommandInput,
  ListExperimentsCommandOutput
>(FisClient, ListExperimentsCommand, "nextToken", "nextToken", "maxResults");
