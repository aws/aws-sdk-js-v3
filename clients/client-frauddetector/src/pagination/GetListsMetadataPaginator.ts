// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetListsMetadataCommand,
  GetListsMetadataCommandInput,
  GetListsMetadataCommandOutput,
} from "../commands/GetListsMetadataCommand";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetListsMetadata: (
  config: FraudDetectorPaginationConfiguration,
  input: GetListsMetadataCommandInput,
  ...rest: any[]
) => Paginator<GetListsMetadataCommandOutput> = createPaginator<
  FraudDetectorPaginationConfiguration,
  GetListsMetadataCommandInput,
  GetListsMetadataCommandOutput
>(FraudDetectorClient, GetListsMetadataCommand, "nextToken", "nextToken", "maxResults");
