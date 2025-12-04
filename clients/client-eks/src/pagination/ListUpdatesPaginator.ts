// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListUpdatesCommand, ListUpdatesCommandInput, ListUpdatesCommandOutput } from "../commands/ListUpdatesCommand";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUpdates: (
  config: EKSPaginationConfiguration,
  input: ListUpdatesCommandInput,
  ...rest: any[]
) => Paginator<ListUpdatesCommandOutput> = createPaginator<
  EKSPaginationConfiguration,
  ListUpdatesCommandInput,
  ListUpdatesCommandOutput
>(EKSClient, ListUpdatesCommand, "nextToken", "nextToken", "maxResults");
