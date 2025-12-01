// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCertificatesCommand,
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput,
} from "../commands/ListCertificatesCommand";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCertificates: (
  config: DirectoryServicePaginationConfiguration,
  input: ListCertificatesCommandInput,
  ...rest: any[]
) => Paginator<ListCertificatesCommandOutput> = createPaginator<
  DirectoryServicePaginationConfiguration,
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput
>(DirectoryServiceClient, ListCertificatesCommand, "NextToken", "NextToken", "Limit");
