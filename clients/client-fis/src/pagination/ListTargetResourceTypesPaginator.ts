// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTargetResourceTypesCommand,
  ListTargetResourceTypesCommandInput,
  ListTargetResourceTypesCommandOutput,
} from "../commands/ListTargetResourceTypesCommand";
import { FisClient } from "../FisClient";
import { FisPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTargetResourceTypes: (
  config: FisPaginationConfiguration,
  input: ListTargetResourceTypesCommandInput,
  ...rest: any[]
) => Paginator<ListTargetResourceTypesCommandOutput> = createPaginator<
  FisPaginationConfiguration,
  ListTargetResourceTypesCommandInput,
  ListTargetResourceTypesCommandOutput
>(FisClient, ListTargetResourceTypesCommand, "nextToken", "nextToken", "maxResults");
