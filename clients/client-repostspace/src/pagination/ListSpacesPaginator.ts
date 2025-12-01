// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListSpacesCommand, ListSpacesCommandInput, ListSpacesCommandOutput } from "../commands/ListSpacesCommand";
import { RepostspaceClient } from "../RepostspaceClient";
import { RepostspacePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSpaces: (
  config: RepostspacePaginationConfiguration,
  input: ListSpacesCommandInput,
  ...rest: any[]
) => Paginator<ListSpacesCommandOutput> = createPaginator<
  RepostspacePaginationConfiguration,
  ListSpacesCommandInput,
  ListSpacesCommandOutput
>(RepostspaceClient, ListSpacesCommand, "nextToken", "nextToken", "maxResults");
