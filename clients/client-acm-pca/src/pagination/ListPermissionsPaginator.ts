// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ACMPCAClient } from "../ACMPCAClient";
import {
  ListPermissionsCommand,
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput,
} from "../commands/ListPermissionsCommand";
import { ACMPCAPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPermissions: (
  config: ACMPCAPaginationConfiguration,
  input: ListPermissionsCommandInput,
  ...rest: any[]
) => Paginator<ListPermissionsCommandOutput> = createPaginator<
  ACMPCAPaginationConfiguration,
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput
>(ACMPCAClient, ListPermissionsCommand, "NextToken", "NextToken", "MaxResults");
