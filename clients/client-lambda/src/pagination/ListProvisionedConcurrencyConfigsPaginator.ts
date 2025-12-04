// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProvisionedConcurrencyConfigsCommand,
  ListProvisionedConcurrencyConfigsCommandInput,
  ListProvisionedConcurrencyConfigsCommandOutput,
} from "../commands/ListProvisionedConcurrencyConfigsCommand";
import { LambdaClient } from "../LambdaClient";
import { LambdaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProvisionedConcurrencyConfigs: (
  config: LambdaPaginationConfiguration,
  input: ListProvisionedConcurrencyConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListProvisionedConcurrencyConfigsCommandOutput> = createPaginator<
  LambdaPaginationConfiguration,
  ListProvisionedConcurrencyConfigsCommandInput,
  ListProvisionedConcurrencyConfigsCommandOutput
>(LambdaClient, ListProvisionedConcurrencyConfigsCommand, "Marker", "NextMarker", "MaxItems");
