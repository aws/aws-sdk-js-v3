// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTemplatesCommand,
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput,
} from "../commands/ListTemplatesCommand";
import { NetworkSecurityManagerClient } from "../NetworkSecurityManagerClient";
import type { NetworkSecurityManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTemplates: (
  config: NetworkSecurityManagerPaginationConfiguration,
  input: ListTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListTemplatesCommandOutput> = createPaginator<
  NetworkSecurityManagerPaginationConfiguration,
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput
>(NetworkSecurityManagerClient, ListTemplatesCommand, "nextToken", "nextToken", "maxResults");
