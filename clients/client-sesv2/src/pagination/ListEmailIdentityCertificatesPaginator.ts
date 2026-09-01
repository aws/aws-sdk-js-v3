// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEmailIdentityCertificatesCommand,
  ListEmailIdentityCertificatesCommandInput,
  ListEmailIdentityCertificatesCommandOutput,
} from "../commands/ListEmailIdentityCertificatesCommand";
import { SESv2Client } from "../SESv2Client";
import type { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEmailIdentityCertificates: (
  config: SESv2PaginationConfiguration,
  input: ListEmailIdentityCertificatesCommandInput,
  ...rest: any[]
) => Paginator<ListEmailIdentityCertificatesCommandOutput> = createPaginator<
  SESv2PaginationConfiguration,
  ListEmailIdentityCertificatesCommandInput,
  ListEmailIdentityCertificatesCommandOutput
>(SESv2Client, ListEmailIdentityCertificatesCommand, "NextToken", "NextToken", "PageSize");
