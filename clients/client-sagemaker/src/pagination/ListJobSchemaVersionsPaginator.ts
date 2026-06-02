// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListJobSchemaVersionsCommand,
  ListJobSchemaVersionsCommandInput,
  ListJobSchemaVersionsCommandOutput,
} from "../commands/ListJobSchemaVersionsCommand";
import { SageMakerClient } from "../SageMakerClient";
import type { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobSchemaVersions: (
  config: SageMakerPaginationConfiguration,
  input: ListJobSchemaVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListJobSchemaVersionsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListJobSchemaVersionsCommandInput,
  ListJobSchemaVersionsCommandOutput
>(SageMakerClient, ListJobSchemaVersionsCommand, "NextToken", "NextToken", "MaxResults");
