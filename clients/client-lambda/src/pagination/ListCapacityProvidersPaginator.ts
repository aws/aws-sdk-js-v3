// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListCapacityProvidersCommand,
  ListCapacityProvidersCommandInput,
  ListCapacityProvidersCommandOutput,
} from "../commands/ListCapacityProvidersCommand";
import { LambdaClient } from "../LambdaClient";
import { LambdaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCapacityProviders: (
  config: LambdaPaginationConfiguration,
  input: ListCapacityProvidersCommandInput,
  ...rest: any[]
) => Paginator<ListCapacityProvidersCommandOutput> = createPaginator<
  LambdaPaginationConfiguration,
  ListCapacityProvidersCommandInput,
  ListCapacityProvidersCommandOutput
>(LambdaClient, ListCapacityProvidersCommand, "Marker", "NextMarker", "MaxItems");
