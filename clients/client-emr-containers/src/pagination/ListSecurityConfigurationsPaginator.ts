// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSecurityConfigurationsCommand,
  ListSecurityConfigurationsCommandInput,
  ListSecurityConfigurationsCommandOutput,
} from "../commands/ListSecurityConfigurationsCommand";
import { EMRContainersClient } from "../EMRContainersClient";
import { EMRContainersPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSecurityConfigurations: (
  config: EMRContainersPaginationConfiguration,
  input: ListSecurityConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListSecurityConfigurationsCommandOutput> = createPaginator<
  EMRContainersPaginationConfiguration,
  ListSecurityConfigurationsCommandInput,
  ListSecurityConfigurationsCommandOutput
>(EMRContainersClient, ListSecurityConfigurationsCommand, "nextToken", "nextToken", "maxResults");
