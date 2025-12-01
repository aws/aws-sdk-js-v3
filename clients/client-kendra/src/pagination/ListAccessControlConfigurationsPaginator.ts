// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccessControlConfigurationsCommand,
  ListAccessControlConfigurationsCommandInput,
  ListAccessControlConfigurationsCommandOutput,
} from "../commands/ListAccessControlConfigurationsCommand";
import { KendraClient } from "../KendraClient";
import { KendraPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessControlConfigurations: (
  config: KendraPaginationConfiguration,
  input: ListAccessControlConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListAccessControlConfigurationsCommandOutput> = createPaginator<
  KendraPaginationConfiguration,
  ListAccessControlConfigurationsCommandInput,
  ListAccessControlConfigurationsCommandOutput
>(KendraClient, ListAccessControlConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
