// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkspacesCommand,
  ListWorkspacesCommandInput,
  ListWorkspacesCommandOutput,
} from "../commands/ListWorkspacesCommand";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";
import { IoTTwinMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkspaces: (
  config: IoTTwinMakerPaginationConfiguration,
  input: ListWorkspacesCommandInput,
  ...rest: any[]
) => Paginator<ListWorkspacesCommandOutput> = createPaginator<
  IoTTwinMakerPaginationConfiguration,
  ListWorkspacesCommandInput,
  ListWorkspacesCommandOutput
>(IoTTwinMakerClient, ListWorkspacesCommand, "nextToken", "nextToken", "maxResults");
