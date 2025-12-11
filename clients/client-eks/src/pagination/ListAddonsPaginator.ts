// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListAddonsCommand, ListAddonsCommandInput, ListAddonsCommandOutput } from "../commands/ListAddonsCommand";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAddons: (
  config: EKSPaginationConfiguration,
  input: ListAddonsCommandInput,
  ...rest: any[]
) => Paginator<ListAddonsCommandOutput> = createPaginator<
  EKSPaginationConfiguration,
  ListAddonsCommandInput,
  ListAddonsCommandOutput
>(EKSClient, ListAddonsCommand, "nextToken", "nextToken", "maxResults");
