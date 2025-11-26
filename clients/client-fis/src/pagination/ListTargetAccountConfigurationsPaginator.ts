// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTargetAccountConfigurationsCommand,
  ListTargetAccountConfigurationsCommandInput,
  ListTargetAccountConfigurationsCommandOutput,
} from "../commands/ListTargetAccountConfigurationsCommand";
import { FisClient } from "../FisClient";
import { FisPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTargetAccountConfigurations: (
  config: FisPaginationConfiguration,
  input: ListTargetAccountConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListTargetAccountConfigurationsCommandOutput> = createPaginator<
  FisPaginationConfiguration,
  ListTargetAccountConfigurationsCommandInput,
  ListTargetAccountConfigurationsCommandOutput
>(FisClient, ListTargetAccountConfigurationsCommand, "nextToken", "nextToken", "maxResults");
