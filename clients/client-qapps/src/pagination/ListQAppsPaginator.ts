// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListQAppsCommand, ListQAppsCommandInput, ListQAppsCommandOutput } from "../commands/ListQAppsCommand";
import { QAppsClient } from "../QAppsClient";
import { QAppsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQApps: (
  config: QAppsPaginationConfiguration,
  input: ListQAppsCommandInput,
  ...rest: any[]
) => Paginator<ListQAppsCommandOutput> = createPaginator<
  QAppsPaginationConfiguration,
  ListQAppsCommandInput,
  ListQAppsCommandOutput
>(QAppsClient, ListQAppsCommand, "nextToken", "nextToken", "limit");
