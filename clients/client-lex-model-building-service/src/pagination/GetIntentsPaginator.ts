// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetIntentsCommand, GetIntentsCommandInput, GetIntentsCommandOutput } from "../commands/GetIntentsCommand";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetIntents: (
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetIntentsCommandInput,
  ...rest: any[]
) => Paginator<GetIntentsCommandOutput> = createPaginator<
  LexModelBuildingServicePaginationConfiguration,
  GetIntentsCommandInput,
  GetIntentsCommandOutput
>(LexModelBuildingServiceClient, GetIntentsCommand, "nextToken", "nextToken", "maxResults");
