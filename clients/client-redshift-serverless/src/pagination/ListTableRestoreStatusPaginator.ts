// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTableRestoreStatusCommand,
  ListTableRestoreStatusCommandInput,
  ListTableRestoreStatusCommandOutput,
} from "../commands/ListTableRestoreStatusCommand";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTableRestoreStatus: (
  config: RedshiftServerlessPaginationConfiguration,
  input: ListTableRestoreStatusCommandInput,
  ...rest: any[]
) => Paginator<ListTableRestoreStatusCommandOutput> = createPaginator<
  RedshiftServerlessPaginationConfiguration,
  ListTableRestoreStatusCommandInput,
  ListTableRestoreStatusCommandOutput
>(RedshiftServerlessClient, ListTableRestoreStatusCommand, "nextToken", "nextToken", "maxResults");
