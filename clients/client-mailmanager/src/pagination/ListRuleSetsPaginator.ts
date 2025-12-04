// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRuleSetsCommand,
  ListRuleSetsCommandInput,
  ListRuleSetsCommandOutput,
} from "../commands/ListRuleSetsCommand";
import { MailManagerClient } from "../MailManagerClient";
import { MailManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRuleSets: (
  config: MailManagerPaginationConfiguration,
  input: ListRuleSetsCommandInput,
  ...rest: any[]
) => Paginator<ListRuleSetsCommandOutput> = createPaginator<
  MailManagerPaginationConfiguration,
  ListRuleSetsCommandInput,
  ListRuleSetsCommandOutput
>(MailManagerClient, ListRuleSetsCommand, "NextToken", "NextToken", "PageSize");
