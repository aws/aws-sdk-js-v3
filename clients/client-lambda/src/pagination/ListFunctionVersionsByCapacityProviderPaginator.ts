// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListFunctionVersionsByCapacityProviderCommand,
  ListFunctionVersionsByCapacityProviderCommandInput,
  ListFunctionVersionsByCapacityProviderCommandOutput,
} from "../commands/ListFunctionVersionsByCapacityProviderCommand";
import { LambdaClient } from "../LambdaClient";
import { LambdaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFunctionVersionsByCapacityProvider: (
  config: LambdaPaginationConfiguration,
  input: ListFunctionVersionsByCapacityProviderCommandInput,
  ...rest: any[]
) => Paginator<ListFunctionVersionsByCapacityProviderCommandOutput> = createPaginator<
  LambdaPaginationConfiguration,
  ListFunctionVersionsByCapacityProviderCommandInput,
  ListFunctionVersionsByCapacityProviderCommandOutput
>(LambdaClient, ListFunctionVersionsByCapacityProviderCommand, "Marker", "NextMarker", "MaxItems");
