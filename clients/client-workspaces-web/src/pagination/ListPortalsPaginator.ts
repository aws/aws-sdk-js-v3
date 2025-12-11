// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListPortalsCommand, ListPortalsCommandInput, ListPortalsCommandOutput } from "../commands/ListPortalsCommand";
import { WorkSpacesWebClient } from "../WorkSpacesWebClient";
import { WorkSpacesWebPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPortals: (
  config: WorkSpacesWebPaginationConfiguration,
  input: ListPortalsCommandInput,
  ...rest: any[]
) => Paginator<ListPortalsCommandOutput> = createPaginator<
  WorkSpacesWebPaginationConfiguration,
  ListPortalsCommandInput,
  ListPortalsCommandOutput
>(WorkSpacesWebClient, ListPortalsCommand, "nextToken", "nextToken", "maxResults");
