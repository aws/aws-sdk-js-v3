// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListArtifactsCommand,
  ListArtifactsCommandInput,
  ListArtifactsCommandOutput,
} from "../commands/ListArtifactsCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListArtifacts: (
  config: DeviceFarmPaginationConfiguration,
  input: ListArtifactsCommandInput,
  ...rest: any[]
) => Paginator<ListArtifactsCommandOutput> = createPaginator<
  DeviceFarmPaginationConfiguration,
  ListArtifactsCommandInput,
  ListArtifactsCommandOutput
>(DeviceFarmClient, ListArtifactsCommand, "nextToken", "nextToken", "");
