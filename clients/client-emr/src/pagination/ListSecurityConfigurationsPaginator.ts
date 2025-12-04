// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSecurityConfigurationsCommand,
  ListSecurityConfigurationsCommandInput,
  ListSecurityConfigurationsCommandOutput,
} from "../commands/ListSecurityConfigurationsCommand";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSecurityConfigurations: (
  config: EMRPaginationConfiguration,
  input: ListSecurityConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListSecurityConfigurationsCommandOutput> = createPaginator<
  EMRPaginationConfiguration,
  ListSecurityConfigurationsCommandInput,
  ListSecurityConfigurationsCommandOutput
>(EMRClient, ListSecurityConfigurationsCommand, "Marker", "Marker", "");
