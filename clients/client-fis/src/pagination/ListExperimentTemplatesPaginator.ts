// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListExperimentTemplatesCommand,
  ListExperimentTemplatesCommandInput,
  ListExperimentTemplatesCommandOutput,
} from "../commands/ListExperimentTemplatesCommand";
import { FisClient } from "../FisClient";
import { FisPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExperimentTemplates: (
  config: FisPaginationConfiguration,
  input: ListExperimentTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListExperimentTemplatesCommandOutput> = createPaginator<
  FisPaginationConfiguration,
  ListExperimentTemplatesCommandInput,
  ListExperimentTemplatesCommandOutput
>(FisClient, ListExperimentTemplatesCommand, "nextToken", "nextToken", "maxResults");
