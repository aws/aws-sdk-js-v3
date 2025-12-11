// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEventSourceMappingsCommand,
  ListEventSourceMappingsCommandInput,
  ListEventSourceMappingsCommandOutput,
} from "../commands/ListEventSourceMappingsCommand";
import { LambdaClient } from "../LambdaClient";
import { LambdaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEventSourceMappings: (
  config: LambdaPaginationConfiguration,
  input: ListEventSourceMappingsCommandInput,
  ...rest: any[]
) => Paginator<ListEventSourceMappingsCommandOutput> = createPaginator<
  LambdaPaginationConfiguration,
  ListEventSourceMappingsCommandInput,
  ListEventSourceMappingsCommandOutput
>(LambdaClient, ListEventSourceMappingsCommand, "Marker", "NextMarker", "MaxItems");
