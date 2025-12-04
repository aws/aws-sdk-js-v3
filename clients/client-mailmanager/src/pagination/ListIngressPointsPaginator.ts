// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIngressPointsCommand,
  ListIngressPointsCommandInput,
  ListIngressPointsCommandOutput,
} from "../commands/ListIngressPointsCommand";
import { MailManagerClient } from "../MailManagerClient";
import { MailManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIngressPoints: (
  config: MailManagerPaginationConfiguration,
  input: ListIngressPointsCommandInput,
  ...rest: any[]
) => Paginator<ListIngressPointsCommandOutput> = createPaginator<
  MailManagerPaginationConfiguration,
  ListIngressPointsCommandInput,
  ListIngressPointsCommandOutput
>(MailManagerClient, ListIngressPointsCommand, "NextToken", "NextToken", "PageSize");
