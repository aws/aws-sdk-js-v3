// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListSessionLoggersCommand,
  ListSessionLoggersCommandInput,
  ListSessionLoggersCommandOutput,
} from "../commands/ListSessionLoggersCommand";
import { WorkSpacesWebClient } from "../WorkSpacesWebClient";
import { WorkSpacesWebPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSessionLoggers: (
  config: WorkSpacesWebPaginationConfiguration,
  input: ListSessionLoggersCommandInput,
  ...rest: any[]
) => Paginator<ListSessionLoggersCommandOutput> = createPaginator<
  WorkSpacesWebPaginationConfiguration,
  ListSessionLoggersCommandInput,
  ListSessionLoggersCommandOutput
>(WorkSpacesWebClient, ListSessionLoggersCommand, "nextToken", "nextToken", "maxResults");
