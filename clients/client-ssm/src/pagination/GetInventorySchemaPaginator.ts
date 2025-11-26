// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetInventorySchemaCommand,
  GetInventorySchemaCommandInput,
  GetInventorySchemaCommandOutput,
} from "../commands/GetInventorySchemaCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetInventorySchema: (
  config: SSMPaginationConfiguration,
  input: GetInventorySchemaCommandInput,
  ...rest: any[]
) => Paginator<GetInventorySchemaCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  GetInventorySchemaCommandInput,
  GetInventorySchemaCommandOutput
>(SSMClient, GetInventorySchemaCommand, "NextToken", "NextToken", "MaxResults");
