// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStorageLensGroupsCommand,
  ListStorageLensGroupsCommandInput,
  ListStorageLensGroupsCommandOutput,
} from "../commands/ListStorageLensGroupsCommand";
import { S3ControlClient } from "../S3ControlClient";
import { S3ControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStorageLensGroups: (
  config: S3ControlPaginationConfiguration,
  input: ListStorageLensGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListStorageLensGroupsCommandOutput> = createPaginator<
  S3ControlPaginationConfiguration,
  ListStorageLensGroupsCommandInput,
  ListStorageLensGroupsCommandOutput
>(S3ControlClient, ListStorageLensGroupsCommand, "NextToken", "NextToken", "");
