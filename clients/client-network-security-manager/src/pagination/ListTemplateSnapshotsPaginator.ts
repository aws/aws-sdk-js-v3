// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTemplateSnapshotsCommand,
  ListTemplateSnapshotsCommandInput,
  ListTemplateSnapshotsCommandOutput,
} from "../commands/ListTemplateSnapshotsCommand";
import { NetworkSecurityManagerClient } from "../NetworkSecurityManagerClient";
import type { NetworkSecurityManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTemplateSnapshots: (
  config: NetworkSecurityManagerPaginationConfiguration,
  input: ListTemplateSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<ListTemplateSnapshotsCommandOutput> = createPaginator<
  NetworkSecurityManagerPaginationConfiguration,
  ListTemplateSnapshotsCommandInput,
  ListTemplateSnapshotsCommandOutput
>(NetworkSecurityManagerClient, ListTemplateSnapshotsCommand, "nextToken", "nextToken", "maxResults");
