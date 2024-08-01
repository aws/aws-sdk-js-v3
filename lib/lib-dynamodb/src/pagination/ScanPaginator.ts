// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ScanCommand, ScanCommandInput, ScanCommandOutput } from "../commands/ScanCommand";
import { DynamoDBDocumentClient } from "../DynamoDBDocumentClient";
import { DynamoDBDocumentPaginationConfiguration } from "./Interfaces";

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
