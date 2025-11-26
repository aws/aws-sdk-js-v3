// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServerCertificateTagsCommand,
  ListServerCertificateTagsCommandInput,
  ListServerCertificateTagsCommandOutput,
} from "../commands/ListServerCertificateTagsCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServerCertificateTags: (
  config: IAMPaginationConfiguration,
  input: ListServerCertificateTagsCommandInput,
  ...rest: any[]
) => Paginator<ListServerCertificateTagsCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListServerCertificateTagsCommandInput,
  ListServerCertificateTagsCommandOutput
>(IAMClient, ListServerCertificateTagsCommand, "Marker", "Marker", "MaxItems");
