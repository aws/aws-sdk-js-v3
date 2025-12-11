// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCustomVerificationEmailTemplatesCommand,
  ListCustomVerificationEmailTemplatesCommandInput,
  ListCustomVerificationEmailTemplatesCommandOutput,
} from "../commands/ListCustomVerificationEmailTemplatesCommand";
import { SESClient } from "../SESClient";
import { SESPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomVerificationEmailTemplates: (
  config: SESPaginationConfiguration,
  input: ListCustomVerificationEmailTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListCustomVerificationEmailTemplatesCommandOutput> = createPaginator<
  SESPaginationConfiguration,
  ListCustomVerificationEmailTemplatesCommandInput,
  ListCustomVerificationEmailTemplatesCommandOutput
>(SESClient, ListCustomVerificationEmailTemplatesCommand, "NextToken", "NextToken", "MaxResults");
