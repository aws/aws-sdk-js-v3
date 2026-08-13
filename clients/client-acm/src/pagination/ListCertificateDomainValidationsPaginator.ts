// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ACMClient } from "../ACMClient";
import {
  ListCertificateDomainValidationsCommand,
  ListCertificateDomainValidationsCommandInput,
  ListCertificateDomainValidationsCommandOutput,
} from "../commands/ListCertificateDomainValidationsCommand";
import type { ACMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCertificateDomainValidations: (
  config: ACMPaginationConfiguration,
  input: ListCertificateDomainValidationsCommandInput,
  ...rest: any[]
) => Paginator<ListCertificateDomainValidationsCommandOutput> = createPaginator<
  ACMPaginationConfiguration,
  ListCertificateDomainValidationsCommandInput,
  ListCertificateDomainValidationsCommandOutput
>(ACMClient, ListCertificateDomainValidationsCommand, "NextToken", "NextToken", "MaxItems");
