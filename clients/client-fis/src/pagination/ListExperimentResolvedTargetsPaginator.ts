// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListExperimentResolvedTargetsCommand,
  ListExperimentResolvedTargetsCommandInput,
  ListExperimentResolvedTargetsCommandOutput,
} from "../commands/ListExperimentResolvedTargetsCommand";
import { FisClient } from "../FisClient";
import { FisPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExperimentResolvedTargets: (
  config: FisPaginationConfiguration,
  input: ListExperimentResolvedTargetsCommandInput,
  ...rest: any[]
) => Paginator<ListExperimentResolvedTargetsCommandOutput> = createPaginator<
  FisPaginationConfiguration,
  ListExperimentResolvedTargetsCommandInput,
  ListExperimentResolvedTargetsCommandOutput
>(FisClient, ListExperimentResolvedTargetsCommand, "nextToken", "nextToken", "maxResults");
