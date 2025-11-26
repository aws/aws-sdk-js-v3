// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ScanCommand, ScanCommandInput, ScanCommandOutput } from "../commands/ScanCommand";
import { DynamoDBClient } from "../DynamoDBClient";
import { DynamoDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateScan: (
  config: DynamoDBPaginationConfiguration,
  input: ScanCommandInput,
  ...rest: any[]
) => Paginator<ScanCommandOutput> = createPaginator<
  DynamoDBPaginationConfiguration,
  ScanCommandInput,
  ScanCommandOutput
>(DynamoDBClient, ScanCommand, "ExclusiveStartKey", "LastEvaluatedKey", "Limit");
