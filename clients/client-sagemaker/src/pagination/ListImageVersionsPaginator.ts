// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListImageVersionsCommand,
  ListImageVersionsCommandInput,
  ListImageVersionsCommandOutput,
} from "../commands/ListImageVersionsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImageVersions: (
  config: SageMakerPaginationConfiguration,
  input: ListImageVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListImageVersionsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListImageVersionsCommandInput,
  ListImageVersionsCommandOutput
>(SageMakerClient, ListImageVersionsCommand, "NextToken", "NextToken", "MaxResults");
