// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCertificateAuthoritiesCommand,
  ListCertificateAuthoritiesCommandInput,
  ListCertificateAuthoritiesCommandOutput,
} from "../commands/ListCertificateAuthoritiesCommand";
import { EKSClient } from "../EKSClient";
import type { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCertificateAuthorities: (
  config: EKSPaginationConfiguration,
  input: ListCertificateAuthoritiesCommandInput,
  ...rest: any[]
) => Paginator<ListCertificateAuthoritiesCommandOutput> = createPaginator<
  EKSPaginationConfiguration,
  ListCertificateAuthoritiesCommandInput,
  ListCertificateAuthoritiesCommandOutput
>(EKSClient, ListCertificateAuthoritiesCommand, "nextToken", "nextToken", "maxResults");
