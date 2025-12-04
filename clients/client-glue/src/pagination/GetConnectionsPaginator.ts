// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetConnectionsCommand,
  GetConnectionsCommandInput,
  GetConnectionsCommandOutput,
} from "../commands/GetConnectionsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetConnections: (
  config: GluePaginationConfiguration,
  input: GetConnectionsCommandInput,
  ...rest: any[]
) => Paginator<GetConnectionsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetConnectionsCommandInput,
  GetConnectionsCommandOutput
>(GlueClient, GetConnectionsCommand, "NextToken", "NextToken", "MaxResults");
