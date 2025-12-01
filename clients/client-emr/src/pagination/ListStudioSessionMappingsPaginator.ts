// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStudioSessionMappingsCommand,
  ListStudioSessionMappingsCommandInput,
  ListStudioSessionMappingsCommandOutput,
} from "../commands/ListStudioSessionMappingsCommand";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStudioSessionMappings: (
  config: EMRPaginationConfiguration,
  input: ListStudioSessionMappingsCommandInput,
  ...rest: any[]
) => Paginator<ListStudioSessionMappingsCommandOutput> = createPaginator<
  EMRPaginationConfiguration,
  ListStudioSessionMappingsCommandInput,
  ListStudioSessionMappingsCommandOutput
>(EMRClient, ListStudioSessionMappingsCommand, "Marker", "Marker", "");
