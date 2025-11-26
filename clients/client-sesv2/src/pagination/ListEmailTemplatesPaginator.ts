// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEmailTemplatesCommand,
  ListEmailTemplatesCommandInput,
  ListEmailTemplatesCommandOutput,
} from "../commands/ListEmailTemplatesCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEmailTemplates: (
  config: SESv2PaginationConfiguration,
  input: ListEmailTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListEmailTemplatesCommandOutput> = createPaginator<
  SESv2PaginationConfiguration,
  ListEmailTemplatesCommandInput,
  ListEmailTemplatesCommandOutput
>(SESv2Client, ListEmailTemplatesCommand, "NextToken", "NextToken", "PageSize");
