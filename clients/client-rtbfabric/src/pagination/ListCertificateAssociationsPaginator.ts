// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCertificateAssociationsCommand,
  ListCertificateAssociationsCommandInput,
  ListCertificateAssociationsCommandOutput,
} from "../commands/ListCertificateAssociationsCommand";
import { RTBFabricClient } from "../RTBFabricClient";
import type { RTBFabricPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCertificateAssociations: (
  config: RTBFabricPaginationConfiguration,
  input: ListCertificateAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListCertificateAssociationsCommandOutput> = createPaginator<
  RTBFabricPaginationConfiguration,
  ListCertificateAssociationsCommandInput,
  ListCertificateAssociationsCommandOutput
>(RTBFabricClient, ListCertificateAssociationsCommand, "nextToken", "nextToken", "maxResults");
