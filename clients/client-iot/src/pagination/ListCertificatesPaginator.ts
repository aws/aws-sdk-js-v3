// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCertificatesCommand,
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput,
} from "../commands/ListCertificatesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCertificates: (
  config: IoTPaginationConfiguration,
  input: ListCertificatesCommandInput,
  ...rest: any[]
) => Paginator<ListCertificatesCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput
>(IoTClient, ListCertificatesCommand, "marker", "nextMarker", "pageSize");
