// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInferenceRoutersCommand,
  ListInferenceRoutersCommandInput,
  ListInferenceRoutersCommandOutput,
} from "../commands/ListInferenceRoutersCommand";
import { SageMakerClient } from "../SageMakerClient";
import type { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInferenceRouters: (
  config: SageMakerPaginationConfiguration,
  input: ListInferenceRoutersCommandInput,
  ...rest: any[]
) => Paginator<ListInferenceRoutersCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListInferenceRoutersCommandInput,
  ListInferenceRoutersCommandOutput
>(SageMakerClient, ListInferenceRoutersCommand, "NextToken", "NextToken", "MaxResults");
