// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  QueryLineageCommand,
  QueryLineageCommandInput,
  QueryLineageCommandOutput,
} from "../commands/QueryLineageCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateQueryLineage: (
  config: SageMakerPaginationConfiguration,
  input: QueryLineageCommandInput,
  ...rest: any[]
) => Paginator<QueryLineageCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  QueryLineageCommandInput,
  QueryLineageCommandOutput
>(SageMakerClient, QueryLineageCommand, "NextToken", "NextToken", "MaxResults");
