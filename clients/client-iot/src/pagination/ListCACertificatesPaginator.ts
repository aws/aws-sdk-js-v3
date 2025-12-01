// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCACertificatesCommand,
  ListCACertificatesCommandInput,
  ListCACertificatesCommandOutput,
} from "../commands/ListCACertificatesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCACertificates: (
  config: IoTPaginationConfiguration,
  input: ListCACertificatesCommandInput,
  ...rest: any[]
) => Paginator<ListCACertificatesCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListCACertificatesCommandInput,
  ListCACertificatesCommandOutput
>(IoTClient, ListCACertificatesCommand, "marker", "nextMarker", "pageSize");
