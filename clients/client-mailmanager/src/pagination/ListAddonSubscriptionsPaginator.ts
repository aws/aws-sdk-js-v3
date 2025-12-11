// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAddonSubscriptionsCommand,
  ListAddonSubscriptionsCommandInput,
  ListAddonSubscriptionsCommandOutput,
} from "../commands/ListAddonSubscriptionsCommand";
import { MailManagerClient } from "../MailManagerClient";
import { MailManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAddonSubscriptions: (
  config: MailManagerPaginationConfiguration,
  input: ListAddonSubscriptionsCommandInput,
  ...rest: any[]
) => Paginator<ListAddonSubscriptionsCommandOutput> = createPaginator<
  MailManagerPaginationConfiguration,
  ListAddonSubscriptionsCommandInput,
  ListAddonSubscriptionsCommandOutput
>(MailManagerClient, ListAddonSubscriptionsCommand, "NextToken", "NextToken", "PageSize");
