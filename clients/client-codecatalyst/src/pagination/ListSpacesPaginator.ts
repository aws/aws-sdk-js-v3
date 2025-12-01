// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCatalystClient } from "../CodeCatalystClient";
import { ListSpacesCommand, ListSpacesCommandInput, ListSpacesCommandOutput } from "../commands/ListSpacesCommand";
import { CodeCatalystPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSpaces: (
  config: CodeCatalystPaginationConfiguration,
  input: ListSpacesCommandInput,
  ...rest: any[]
) => Paginator<ListSpacesCommandOutput> = createPaginator<
  CodeCatalystPaginationConfiguration,
  ListSpacesCommandInput,
  ListSpacesCommandOutput
>(CodeCatalystClient, ListSpacesCommand, "nextToken", "nextToken", "");
