// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListIndicesCommand, ListIndicesCommandInput, ListIndicesCommandOutput } from "../commands/ListIndicesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIndices: (
  config: IoTPaginationConfiguration,
  input: ListIndicesCommandInput,
  ...rest: any[]
) => Paginator<ListIndicesCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListIndicesCommandInput,
  ListIndicesCommandOutput
>(IoTClient, ListIndicesCommand, "nextToken", "nextToken", "maxResults");
