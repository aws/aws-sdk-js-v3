// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAppImageConfigsCommand,
  ListAppImageConfigsCommandInput,
  ListAppImageConfigsCommandOutput,
} from "../commands/ListAppImageConfigsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppImageConfigs: (
  config: SageMakerPaginationConfiguration,
  input: ListAppImageConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListAppImageConfigsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListAppImageConfigsCommandInput,
  ListAppImageConfigsCommandOutput
>(SageMakerClient, ListAppImageConfigsCommand, "NextToken", "NextToken", "MaxResults");
