// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSecurityConfigsCommand,
  ListSecurityConfigsCommandInput,
  ListSecurityConfigsCommandOutput,
} from "../commands/ListSecurityConfigsCommand";
import { OpenSearchServerlessClient } from "../OpenSearchServerlessClient";
import { OpenSearchServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSecurityConfigs: (
  config: OpenSearchServerlessPaginationConfiguration,
  input: ListSecurityConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListSecurityConfigsCommandOutput> = createPaginator<
  OpenSearchServerlessPaginationConfiguration,
  ListSecurityConfigsCommandInput,
  ListSecurityConfigsCommandOutput
>(OpenSearchServerlessClient, ListSecurityConfigsCommand, "nextToken", "nextToken", "");
