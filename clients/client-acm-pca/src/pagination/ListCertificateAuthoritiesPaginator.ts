// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ACMPCAClient } from "../ACMPCAClient";
import {
  ListCertificateAuthoritiesCommand,
  ListCertificateAuthoritiesCommandInput,
  ListCertificateAuthoritiesCommandOutput,
} from "../commands/ListCertificateAuthoritiesCommand";
import { ACMPCAPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCertificateAuthorities: (
  config: ACMPCAPaginationConfiguration,
  input: ListCertificateAuthoritiesCommandInput,
  ...rest: any[]
) => Paginator<ListCertificateAuthoritiesCommandOutput> = createPaginator<
  ACMPCAPaginationConfiguration,
  ListCertificateAuthoritiesCommandInput,
  ListCertificateAuthoritiesCommandOutput
>(ACMPCAClient, ListCertificateAuthoritiesCommand, "NextToken", "NextToken", "MaxResults");
