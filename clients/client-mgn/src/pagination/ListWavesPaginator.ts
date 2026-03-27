// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListWavesCommand, ListWavesCommandInput, ListWavesCommandOutput } from "../commands/ListWavesCommand";
import { MgnClient } from "../MgnClient";
import type { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWaves: (
  config: MgnPaginationConfiguration,
  input: ListWavesCommandInput,
  ...rest: any[]
) => Paginator<ListWavesCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListWavesCommandInput,
  ListWavesCommandOutput
>(MgnClient, ListWavesCommand, "nextToken", "nextToken", "maxResults");
