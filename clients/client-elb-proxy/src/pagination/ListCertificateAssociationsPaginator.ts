// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCertificateAssociationsCommand,
  ListCertificateAssociationsCommandInput,
  ListCertificateAssociationsCommandOutput,
} from "../commands/ListCertificateAssociationsCommand";
import { ELBProxyClient } from "../ELBProxyClient";
import type { ELBProxyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCertificateAssociations: (
  config: ELBProxyPaginationConfiguration,
  input: ListCertificateAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListCertificateAssociationsCommandOutput> = createPaginator<
  ELBProxyPaginationConfiguration,
  ListCertificateAssociationsCommandInput,
  ListCertificateAssociationsCommandOutput
>(ELBProxyClient, ListCertificateAssociationsCommand, "nextToken", "nextToken", "maxResults");
