// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListKxEnvironmentsCommand,
  ListKxEnvironmentsCommandInput,
  ListKxEnvironmentsCommandOutput,
} from "../commands/ListKxEnvironmentsCommand";
import { FinspaceClient } from "../FinspaceClient";
import { FinspacePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKxEnvironments: (
  config: FinspacePaginationConfiguration,
  input: ListKxEnvironmentsCommandInput,
  ...rest: any[]
) => Paginator<ListKxEnvironmentsCommandOutput> = createPaginator<
  FinspacePaginationConfiguration,
  ListKxEnvironmentsCommandInput,
  ListKxEnvironmentsCommandOutput
>(FinspaceClient, ListKxEnvironmentsCommand, "nextToken", "nextToken", "maxResults");
