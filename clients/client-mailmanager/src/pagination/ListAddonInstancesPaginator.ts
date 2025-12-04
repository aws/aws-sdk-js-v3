// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAddonInstancesCommand,
  ListAddonInstancesCommandInput,
  ListAddonInstancesCommandOutput,
} from "../commands/ListAddonInstancesCommand";
import { MailManagerClient } from "../MailManagerClient";
import { MailManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAddonInstances: (
  config: MailManagerPaginationConfiguration,
  input: ListAddonInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListAddonInstancesCommandOutput> = createPaginator<
  MailManagerPaginationConfiguration,
  ListAddonInstancesCommandInput,
  ListAddonInstancesCommandOutput
>(MailManagerClient, ListAddonInstancesCommand, "NextToken", "NextToken", "PageSize");
