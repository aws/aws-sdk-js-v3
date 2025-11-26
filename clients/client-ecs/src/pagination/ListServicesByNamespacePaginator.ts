// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServicesByNamespaceCommand,
  ListServicesByNamespaceCommandInput,
  ListServicesByNamespaceCommandOutput,
} from "../commands/ListServicesByNamespaceCommand";
import { ECSClient } from "../ECSClient";
import { ECSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServicesByNamespace: (
  config: ECSPaginationConfiguration,
  input: ListServicesByNamespaceCommandInput,
  ...rest: any[]
) => Paginator<ListServicesByNamespaceCommandOutput> = createPaginator<
  ECSPaginationConfiguration,
  ListServicesByNamespaceCommandInput,
  ListServicesByNamespaceCommandOutput
>(ECSClient, ListServicesByNamespaceCommand, "nextToken", "nextToken", "maxResults");
