// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AuditManagerClient } from "../AuditManagerClient";
import {
  ListControlsCommand,
  ListControlsCommandInput,
  ListControlsCommandOutput,
} from "../commands/ListControlsCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListControls: (
  config: AuditManagerPaginationConfiguration,
  input: ListControlsCommandInput,
  ...rest: any[]
) => Paginator<ListControlsCommandOutput> = createPaginator<
  AuditManagerPaginationConfiguration,
  ListControlsCommandInput,
  ListControlsCommandOutput
>(AuditManagerClient, ListControlsCommand, "nextToken", "nextToken", "maxResults");
