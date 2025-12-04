// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTestGridSessionArtifactsCommand,
  ListTestGridSessionArtifactsCommandInput,
  ListTestGridSessionArtifactsCommandOutput,
} from "../commands/ListTestGridSessionArtifactsCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestGridSessionArtifacts: (
  config: DeviceFarmPaginationConfiguration,
  input: ListTestGridSessionArtifactsCommandInput,
  ...rest: any[]
) => Paginator<ListTestGridSessionArtifactsCommandOutput> = createPaginator<
  DeviceFarmPaginationConfiguration,
  ListTestGridSessionArtifactsCommandInput,
  ListTestGridSessionArtifactsCommandOutput
>(DeviceFarmClient, ListTestGridSessionArtifactsCommand, "nextToken", "nextToken", "maxResult");
