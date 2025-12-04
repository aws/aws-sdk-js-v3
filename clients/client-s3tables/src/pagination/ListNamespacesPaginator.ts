// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNamespacesCommand,
  ListNamespacesCommandInput,
  ListNamespacesCommandOutput,
} from "../commands/ListNamespacesCommand";
import { S3TablesClient } from "../S3TablesClient";
import { S3TablesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNamespaces: (
  config: S3TablesPaginationConfiguration,
  input: ListNamespacesCommandInput,
  ...rest: any[]
) => Paginator<ListNamespacesCommandOutput> = createPaginator<
  S3TablesPaginationConfiguration,
  ListNamespacesCommandInput,
  ListNamespacesCommandOutput
>(S3TablesClient, ListNamespacesCommand, "continuationToken", "continuationToken", "maxNamespaces");
