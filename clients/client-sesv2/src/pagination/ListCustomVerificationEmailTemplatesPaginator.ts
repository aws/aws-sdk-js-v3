// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCustomVerificationEmailTemplatesCommand,
  ListCustomVerificationEmailTemplatesCommandInput,
  ListCustomVerificationEmailTemplatesCommandOutput,
} from "../commands/ListCustomVerificationEmailTemplatesCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomVerificationEmailTemplates: (
  config: SESv2PaginationConfiguration,
  input: ListCustomVerificationEmailTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListCustomVerificationEmailTemplatesCommandOutput> = createPaginator<
  SESv2PaginationConfiguration,
  ListCustomVerificationEmailTemplatesCommandInput,
  ListCustomVerificationEmailTemplatesCommandOutput
>(SESv2Client, ListCustomVerificationEmailTemplatesCommand, "NextToken", "NextToken", "PageSize");
