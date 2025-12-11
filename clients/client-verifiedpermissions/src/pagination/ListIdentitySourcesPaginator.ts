// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIdentitySourcesCommand,
  ListIdentitySourcesCommandInput,
  ListIdentitySourcesCommandOutput,
} from "../commands/ListIdentitySourcesCommand";
import { VerifiedPermissionsClient } from "../VerifiedPermissionsClient";
import { VerifiedPermissionsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIdentitySources: (
  config: VerifiedPermissionsPaginationConfiguration,
  input: ListIdentitySourcesCommandInput,
  ...rest: any[]
) => Paginator<ListIdentitySourcesCommandOutput> = createPaginator<
  VerifiedPermissionsPaginationConfiguration,
  ListIdentitySourcesCommandInput,
  ListIdentitySourcesCommandOutput
>(VerifiedPermissionsClient, ListIdentitySourcesCommand, "nextToken", "nextToken", "maxResults");
