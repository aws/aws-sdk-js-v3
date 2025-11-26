// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInstanceProfilesForRoleCommand,
  ListInstanceProfilesForRoleCommandInput,
  ListInstanceProfilesForRoleCommandOutput,
} from "../commands/ListInstanceProfilesForRoleCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInstanceProfilesForRole: (
  config: IAMPaginationConfiguration,
  input: ListInstanceProfilesForRoleCommandInput,
  ...rest: any[]
) => Paginator<ListInstanceProfilesForRoleCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListInstanceProfilesForRoleCommandInput,
  ListInstanceProfilesForRoleCommandOutput
>(IAMClient, ListInstanceProfilesForRoleCommand, "Marker", "Marker", "MaxItems");
