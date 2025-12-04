// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNamespacesCommand,
  ListNamespacesCommandInput,
  ListNamespacesCommandOutput,
} from "../commands/ListNamespacesCommand";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNamespaces: (
  config: RedshiftServerlessPaginationConfiguration,
  input: ListNamespacesCommandInput,
  ...rest: any[]
) => Paginator<ListNamespacesCommandOutput> = createPaginator<
  RedshiftServerlessPaginationConfiguration,
  ListNamespacesCommandInput,
  ListNamespacesCommandOutput
>(RedshiftServerlessClient, ListNamespacesCommand, "nextToken", "nextToken", "maxResults");
