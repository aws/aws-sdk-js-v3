// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetIntentVersionsCommand,
  GetIntentVersionsCommandInput,
  GetIntentVersionsCommandOutput,
} from "../commands/GetIntentVersionsCommand";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetIntentVersions: (
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetIntentVersionsCommandInput,
  ...rest: any[]
) => Paginator<GetIntentVersionsCommandOutput> = createPaginator<
  LexModelBuildingServicePaginationConfiguration,
  GetIntentVersionsCommandInput,
  GetIntentVersionsCommandOutput
>(LexModelBuildingServiceClient, GetIntentVersionsCommand, "nextToken", "nextToken", "maxResults");
