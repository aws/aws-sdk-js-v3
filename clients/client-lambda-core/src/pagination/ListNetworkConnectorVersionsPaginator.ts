// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNetworkConnectorVersionsCommand,
  ListNetworkConnectorVersionsCommandInput,
  ListNetworkConnectorVersionsCommandOutput,
} from "../commands/ListNetworkConnectorVersionsCommand";
import { LambdaCoreClient } from "../LambdaCoreClient";
import type { LambdaCorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworkConnectorVersions: (
  config: LambdaCorePaginationConfiguration,
  input: ListNetworkConnectorVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListNetworkConnectorVersionsCommandOutput> = createPaginator<
  LambdaCorePaginationConfiguration,
  ListNetworkConnectorVersionsCommandInput,
  ListNetworkConnectorVersionsCommandOutput
>(LambdaCoreClient, ListNetworkConnectorVersionsCommand, "Marker", "NextMarker", "MaxItems");
