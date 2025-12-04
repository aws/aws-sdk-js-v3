// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPageResolutionsCommand,
  ListPageResolutionsCommandInput,
  ListPageResolutionsCommandOutput,
} from "../commands/ListPageResolutionsCommand";
import { SSMContactsClient } from "../SSMContactsClient";
import { SSMContactsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPageResolutions: (
  config: SSMContactsPaginationConfiguration,
  input: ListPageResolutionsCommandInput,
  ...rest: any[]
) => Paginator<ListPageResolutionsCommandOutput> = createPaginator<
  SSMContactsPaginationConfiguration,
  ListPageResolutionsCommandInput,
  ListPageResolutionsCommandOutput
>(SSMContactsClient, ListPageResolutionsCommand, "NextToken", "NextToken", "");
