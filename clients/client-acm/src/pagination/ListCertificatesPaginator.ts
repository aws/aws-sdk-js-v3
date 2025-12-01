// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ACMClient } from "../ACMClient";
import {
  ListCertificatesCommand,
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput,
} from "../commands/ListCertificatesCommand";
import { ACMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCertificates: (
  config: ACMPaginationConfiguration,
  input: ListCertificatesCommandInput,
  ...rest: any[]
) => Paginator<ListCertificatesCommandOutput> = createPaginator<
  ACMPaginationConfiguration,
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput
>(ACMClient, ListCertificatesCommand, "NextToken", "NextToken", "MaxItems");
