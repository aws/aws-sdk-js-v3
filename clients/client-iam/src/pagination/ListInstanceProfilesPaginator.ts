// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInstanceProfilesCommand,
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
} from "../commands/ListInstanceProfilesCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInstanceProfiles: (
  config: IAMPaginationConfiguration,
  input: ListInstanceProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListInstanceProfilesCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput
>(IAMClient, ListInstanceProfilesCommand, "Marker", "Marker", "MaxItems");
