// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEndpointAccessCommand,
  ListEndpointAccessCommandInput,
  ListEndpointAccessCommandOutput,
} from "../commands/ListEndpointAccessCommand";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEndpointAccess: (
  config: RedshiftServerlessPaginationConfiguration,
  input: ListEndpointAccessCommandInput,
  ...rest: any[]
) => Paginator<ListEndpointAccessCommandOutput> = createPaginator<
  RedshiftServerlessPaginationConfiguration,
  ListEndpointAccessCommandInput,
  ListEndpointAccessCommandOutput
>(RedshiftServerlessClient, ListEndpointAccessCommand, "nextToken", "nextToken", "maxResults");
