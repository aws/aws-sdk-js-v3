// smithy-typescript generated code
import { createItemsPaginator, createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { type ScanCommandInput, type ScanCommandOutput, ScanCommand } from "../commands/ScanCommand";
import { DynamoDBDocumentClient } from "../DynamoDBDocumentClient";
import type { DynamoDBDocumentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export type { Paginator };
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

/**
 * @public
 */
export const paginateScanItems: (
  config: DynamoDBDocumentPaginationConfiguration,
  input: ScanCommandInput,
  ...additionalArguments: any
) => Paginator<NonNullable<ScanCommandOutput["Items"]>[number]> = createItemsPaginator<
  DynamoDBDocumentPaginationConfiguration,
  ScanCommandInput,
  NonNullable<ScanCommandOutput["Items"]>[number]
>(paginateScan, "Items");
