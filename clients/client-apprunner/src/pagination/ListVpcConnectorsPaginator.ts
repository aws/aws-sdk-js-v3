// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppRunnerClient } from "../AppRunnerClient";
import {
  ListVpcConnectorsCommand,
  ListVpcConnectorsCommandInput,
  ListVpcConnectorsCommandOutput,
} from "../commands/ListVpcConnectorsCommand";
import { AppRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVpcConnectors: (
  config: AppRunnerPaginationConfiguration,
  input: ListVpcConnectorsCommandInput,
  ...rest: any[]
) => Paginator<ListVpcConnectorsCommandOutput> = createPaginator<
  AppRunnerPaginationConfiguration,
  ListVpcConnectorsCommandInput,
  ListVpcConnectorsCommandOutput
>(AppRunnerClient, ListVpcConnectorsCommand, "NextToken", "NextToken", "MaxResults");
