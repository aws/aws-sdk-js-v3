// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListLayersCommand, ListLayersCommandInput, ListLayersCommandOutput } from "../commands/ListLayersCommand";
import { LambdaClient } from "../LambdaClient";
import { LambdaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLayers: (
  config: LambdaPaginationConfiguration,
  input: ListLayersCommandInput,
  ...rest: any[]
) => Paginator<ListLayersCommandOutput> = createPaginator<
  LambdaPaginationConfiguration,
  ListLayersCommandInput,
  ListLayersCommandOutput
>(LambdaClient, ListLayersCommand, "Marker", "NextMarker", "MaxItems");
