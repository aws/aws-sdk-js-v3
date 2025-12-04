// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSubjectsCommand,
  ListSubjectsCommandInput,
  ListSubjectsCommandOutput,
} from "../commands/ListSubjectsCommand";
import { RolesAnywhereClient } from "../RolesAnywhereClient";
import { RolesAnywherePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSubjects: (
  config: RolesAnywherePaginationConfiguration,
  input: ListSubjectsCommandInput,
  ...rest: any[]
) => Paginator<ListSubjectsCommandOutput> = createPaginator<
  RolesAnywherePaginationConfiguration,
  ListSubjectsCommandInput,
  ListSubjectsCommandOutput
>(RolesAnywhereClient, ListSubjectsCommand, "nextToken", "nextToken", "");
