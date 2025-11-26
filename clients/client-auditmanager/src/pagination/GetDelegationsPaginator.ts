// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AuditManagerClient } from "../AuditManagerClient";
import {
  GetDelegationsCommand,
  GetDelegationsCommandInput,
  GetDelegationsCommandOutput,
} from "../commands/GetDelegationsCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetDelegations: (
  config: AuditManagerPaginationConfiguration,
  input: GetDelegationsCommandInput,
  ...rest: any[]
) => Paginator<GetDelegationsCommandOutput> = createPaginator<
  AuditManagerPaginationConfiguration,
  GetDelegationsCommandInput,
  GetDelegationsCommandOutput
>(AuditManagerClient, GetDelegationsCommand, "nextToken", "nextToken", "maxResults");
