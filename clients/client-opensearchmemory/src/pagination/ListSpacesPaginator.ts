// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListSpacesCommand, ListSpacesCommandInput, ListSpacesCommandOutput } from "../commands/ListSpacesCommand";
import { OpenSearchMemoryClient } from "../OpenSearchMemoryClient";
import type { OpenSearchMemoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSpaces: (
  config: OpenSearchMemoryPaginationConfiguration,
  input: ListSpacesCommandInput,
  ...rest: any[]
) => Paginator<ListSpacesCommandOutput> = createPaginator<
  OpenSearchMemoryPaginationConfiguration,
  ListSpacesCommandInput,
  ListSpacesCommandOutput
>(OpenSearchMemoryClient, ListSpacesCommand, "nextToken", "nextToken", "maxResults");
