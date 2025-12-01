// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProtectionsCommand,
  ListProtectionsCommandInput,
  ListProtectionsCommandOutput,
} from "../commands/ListProtectionsCommand";
import { ShieldClient } from "../ShieldClient";
import { ShieldPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProtections: (
  config: ShieldPaginationConfiguration,
  input: ListProtectionsCommandInput,
  ...rest: any[]
) => Paginator<ListProtectionsCommandOutput> = createPaginator<
  ShieldPaginationConfiguration,
  ListProtectionsCommandInput,
  ListProtectionsCommandOutput
>(ShieldClient, ListProtectionsCommand, "NextToken", "NextToken", "MaxResults");
