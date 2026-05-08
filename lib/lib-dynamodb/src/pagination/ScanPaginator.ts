// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import type { ScanCommandInput, ScanCommandOutput } from "../commands/ScanCommand";
import { ScanCommand } from "../commands/ScanCommand";
import { DynamoDBDocumentClient } from "../DynamoDBDocumentClient";
import type { DynamoDBDocumentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export { Paginator };
/**
 * @public
 */
export const paginateScan: (
  config: DynamoDBDocumentPaginationConfiguration,
  input: ScanCommandInput,
  ...additionalArguments: any
) => Paginator<ScanCommandOutput> = createPaginator<
  DynamoDBDocumentPaginationConfiguration,
  ScanCommandInput,
  ScanCommandOutput
>(DynamoDBDocumentClient, ScanCommand, "ExclusiveStartKey", "LastEvaluatedKey", "Limit");
