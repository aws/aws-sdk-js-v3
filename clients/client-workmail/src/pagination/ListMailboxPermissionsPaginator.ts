// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMailboxPermissionsCommand,
  ListMailboxPermissionsCommandInput,
  ListMailboxPermissionsCommandOutput,
} from "../commands/ListMailboxPermissionsCommand";
import { WorkMailClient } from "../WorkMailClient";
import { WorkMailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMailboxPermissions: (
  config: WorkMailPaginationConfiguration,
  input: ListMailboxPermissionsCommandInput,
  ...rest: any[]
) => Paginator<ListMailboxPermissionsCommandOutput> = createPaginator<
  WorkMailPaginationConfiguration,
  ListMailboxPermissionsCommandInput,
  ListMailboxPermissionsCommandOutput
>(WorkMailClient, ListMailboxPermissionsCommand, "NextToken", "NextToken", "MaxResults");
