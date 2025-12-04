// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLayerVersionsCommand,
  ListLayerVersionsCommandInput,
  ListLayerVersionsCommandOutput,
} from "../commands/ListLayerVersionsCommand";
import { LambdaClient } from "../LambdaClient";
import { LambdaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLayerVersions: (
  config: LambdaPaginationConfiguration,
  input: ListLayerVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListLayerVersionsCommandOutput> = createPaginator<
  LambdaPaginationConfiguration,
  ListLayerVersionsCommandInput,
  ListLayerVersionsCommandOutput
>(LambdaClient, ListLayerVersionsCommand, "Marker", "NextMarker", "MaxItems");
