// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTrialComponentsCommand,
  ListTrialComponentsCommandInput,
  ListTrialComponentsCommandOutput,
} from "../commands/ListTrialComponentsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrialComponents: (
  config: SageMakerPaginationConfiguration,
  input: ListTrialComponentsCommandInput,
  ...rest: any[]
) => Paginator<ListTrialComponentsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListTrialComponentsCommandInput,
  ListTrialComponentsCommandOutput
>(SageMakerClient, ListTrialComponentsCommand, "NextToken", "NextToken", "MaxResults");
