// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCertificatesCommand,
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput,
} from "../commands/ListCertificatesCommand";
import { TransferClient } from "../TransferClient";
import { TransferPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCertificates: (
  config: TransferPaginationConfiguration,
  input: ListCertificatesCommandInput,
  ...rest: any[]
) => Paginator<ListCertificatesCommandOutput> = createPaginator<
  TransferPaginationConfiguration,
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput
>(TransferClient, ListCertificatesCommand, "NextToken", "NextToken", "MaxResults");
