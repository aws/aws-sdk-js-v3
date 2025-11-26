// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AmplifyUIBuilderClient } from "../AmplifyUIBuilderClient";
import { ListThemesCommand, ListThemesCommandInput, ListThemesCommandOutput } from "../commands/ListThemesCommand";
import { AmplifyUIBuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThemes: (
  config: AmplifyUIBuilderPaginationConfiguration,
  input: ListThemesCommandInput,
  ...rest: any[]
) => Paginator<ListThemesCommandOutput> = createPaginator<
  AmplifyUIBuilderPaginationConfiguration,
  ListThemesCommandInput,
  ListThemesCommandOutput
>(AmplifyUIBuilderClient, ListThemesCommand, "nextToken", "nextToken", "maxResults");
