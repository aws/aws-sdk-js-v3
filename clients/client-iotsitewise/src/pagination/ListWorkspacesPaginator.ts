// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkspacesCommand,
  ListWorkspacesCommandInput,
  ListWorkspacesCommandOutput,
} from "../commands/ListWorkspacesCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import type { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkspaces: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListWorkspacesCommandInput,
  ...rest: any[]
) => Paginator<ListWorkspacesCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListWorkspacesCommandInput,
  ListWorkspacesCommandOutput
>(IoTSiteWiseClient, ListWorkspacesCommand, "nextToken", "nextToken", "maxResults");
