// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStudioLifecycleConfigsCommand,
  ListStudioLifecycleConfigsCommandInput,
  ListStudioLifecycleConfigsCommandOutput,
} from "../commands/ListStudioLifecycleConfigsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStudioLifecycleConfigs: (
  config: SageMakerPaginationConfiguration,
  input: ListStudioLifecycleConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListStudioLifecycleConfigsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListStudioLifecycleConfigsCommandInput,
  ListStudioLifecycleConfigsCommandOutput
>(SageMakerClient, ListStudioLifecycleConfigsCommand, "NextToken", "NextToken", "MaxResults");
