// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTrustStoreCertificatesCommand,
  ListTrustStoreCertificatesCommandInput,
  ListTrustStoreCertificatesCommandOutput,
} from "../commands/ListTrustStoreCertificatesCommand";
import { WorkSpacesWebClient } from "../WorkSpacesWebClient";
import { WorkSpacesWebPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrustStoreCertificates: (
  config: WorkSpacesWebPaginationConfiguration,
  input: ListTrustStoreCertificatesCommandInput,
  ...rest: any[]
) => Paginator<ListTrustStoreCertificatesCommandOutput> = createPaginator<
  WorkSpacesWebPaginationConfiguration,
  ListTrustStoreCertificatesCommandInput,
  ListTrustStoreCertificatesCommandOutput
>(WorkSpacesWebClient, ListTrustStoreCertificatesCommand, "nextToken", "nextToken", "maxResults");
