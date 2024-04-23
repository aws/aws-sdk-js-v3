// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListWebsiteCertificateAuthoritiesCommand,
  ListWebsiteCertificateAuthoritiesCommandInput,
  ListWebsiteCertificateAuthoritiesCommandOutput,
} from "../commands/ListWebsiteCertificateAuthoritiesCommand";
import { WorkLinkClient } from "../WorkLinkClient";
import { WorkLinkPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWebsiteCertificateAuthorities: (
  config: WorkLinkPaginationConfiguration,
  input: ListWebsiteCertificateAuthoritiesCommandInput,
  ...rest: any[]
) => Paginator<ListWebsiteCertificateAuthoritiesCommandOutput> = createPaginator<
  WorkLinkPaginationConfiguration,
  ListWebsiteCertificateAuthoritiesCommandInput,
  ListWebsiteCertificateAuthoritiesCommandOutput
>(WorkLinkClient, ListWebsiteCertificateAuthoritiesCommand, "NextToken", "NextToken", "MaxResults");
