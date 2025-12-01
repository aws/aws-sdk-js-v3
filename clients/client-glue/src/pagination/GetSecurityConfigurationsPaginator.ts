// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetSecurityConfigurationsCommand,
  GetSecurityConfigurationsCommandInput,
  GetSecurityConfigurationsCommandOutput,
} from "../commands/GetSecurityConfigurationsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetSecurityConfigurations: (
  config: GluePaginationConfiguration,
  input: GetSecurityConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<GetSecurityConfigurationsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetSecurityConfigurationsCommandInput,
  GetSecurityConfigurationsCommandOutput
>(GlueClient, GetSecurityConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
