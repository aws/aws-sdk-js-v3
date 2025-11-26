// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServerCertificatesCommand,
  ListServerCertificatesCommandInput,
  ListServerCertificatesCommandOutput,
} from "../commands/ListServerCertificatesCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServerCertificates: (
  config: IAMPaginationConfiguration,
  input: ListServerCertificatesCommandInput,
  ...rest: any[]
) => Paginator<ListServerCertificatesCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListServerCertificatesCommandInput,
  ListServerCertificatesCommandOutput
>(IAMClient, ListServerCertificatesCommand, "Marker", "Marker", "MaxItems");
