// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListHumanTaskUisCommand,
  ListHumanTaskUisCommandInput,
  ListHumanTaskUisCommandOutput,
} from "../commands/ListHumanTaskUisCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHumanTaskUis: (
  config: SageMakerPaginationConfiguration,
  input: ListHumanTaskUisCommandInput,
  ...rest: any[]
) => Paginator<ListHumanTaskUisCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListHumanTaskUisCommandInput,
  ListHumanTaskUisCommandOutput
>(SageMakerClient, ListHumanTaskUisCommand, "NextToken", "NextToken", "MaxResults");
