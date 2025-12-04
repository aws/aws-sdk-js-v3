// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCertificatesByCACommand,
  ListCertificatesByCACommandInput,
  ListCertificatesByCACommandOutput,
} from "../commands/ListCertificatesByCACommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCertificatesByCA: (
  config: IoTPaginationConfiguration,
  input: ListCertificatesByCACommandInput,
  ...rest: any[]
) => Paginator<ListCertificatesByCACommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListCertificatesByCACommandInput,
  ListCertificatesByCACommandOutput
>(IoTClient, ListCertificatesByCACommand, "marker", "nextMarker", "pageSize");
