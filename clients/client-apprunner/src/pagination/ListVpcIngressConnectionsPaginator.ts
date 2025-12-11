// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppRunnerClient } from "../AppRunnerClient";
import {
  ListVpcIngressConnectionsCommand,
  ListVpcIngressConnectionsCommandInput,
  ListVpcIngressConnectionsCommandOutput,
} from "../commands/ListVpcIngressConnectionsCommand";
import { AppRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVpcIngressConnections: (
  config: AppRunnerPaginationConfiguration,
  input: ListVpcIngressConnectionsCommandInput,
  ...rest: any[]
) => Paginator<ListVpcIngressConnectionsCommandOutput> = createPaginator<
  AppRunnerPaginationConfiguration,
  ListVpcIngressConnectionsCommandInput,
  ListVpcIngressConnectionsCommandOutput
>(AppRunnerClient, ListVpcIngressConnectionsCommand, "NextToken", "NextToken", "MaxResults");
