// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListRecordsCommand, ListRecordsCommandInput, ListRecordsCommandOutput } from "../commands/ListRecordsCommand";
import { SageMakerFeatureStoreRuntimeClient } from "../SageMakerFeatureStoreRuntimeClient";
import type { SageMakerFeatureStoreRuntimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecords: (
  config: SageMakerFeatureStoreRuntimePaginationConfiguration,
  input: ListRecordsCommandInput,
  ...rest: any[]
) => Paginator<ListRecordsCommandOutput> = createPaginator<
  SageMakerFeatureStoreRuntimePaginationConfiguration,
  ListRecordsCommandInput,
  ListRecordsCommandOutput
>(SageMakerFeatureStoreRuntimeClient, ListRecordsCommand, "NextToken", "NextToken", "MaxResults");
