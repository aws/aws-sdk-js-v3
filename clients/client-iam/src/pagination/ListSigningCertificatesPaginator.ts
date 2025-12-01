// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSigningCertificatesCommand,
  ListSigningCertificatesCommandInput,
  ListSigningCertificatesCommandOutput,
} from "../commands/ListSigningCertificatesCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSigningCertificates: (
  config: IAMPaginationConfiguration,
  input: ListSigningCertificatesCommandInput,
  ...rest: any[]
) => Paginator<ListSigningCertificatesCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListSigningCertificatesCommandInput,
  ListSigningCertificatesCommandOutput
>(IAMClient, ListSigningCertificatesCommand, "Marker", "Marker", "MaxItems");
