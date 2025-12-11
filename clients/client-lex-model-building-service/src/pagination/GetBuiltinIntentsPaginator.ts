// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetBuiltinIntentsCommand,
  GetBuiltinIntentsCommandInput,
  GetBuiltinIntentsCommandOutput,
} from "../commands/GetBuiltinIntentsCommand";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetBuiltinIntents: (
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetBuiltinIntentsCommandInput,
  ...rest: any[]
) => Paginator<GetBuiltinIntentsCommandOutput> = createPaginator<
  LexModelBuildingServicePaginationConfiguration,
  GetBuiltinIntentsCommandInput,
  GetBuiltinIntentsCommandOutput
>(LexModelBuildingServiceClient, GetBuiltinIntentsCommand, "nextToken", "nextToken", "maxResults");
