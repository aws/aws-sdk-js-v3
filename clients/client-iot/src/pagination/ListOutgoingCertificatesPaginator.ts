// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOutgoingCertificatesCommand,
  ListOutgoingCertificatesCommandInput,
  ListOutgoingCertificatesCommandOutput,
} from "../commands/ListOutgoingCertificatesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOutgoingCertificates: (
  config: IoTPaginationConfiguration,
  input: ListOutgoingCertificatesCommandInput,
  ...rest: any[]
) => Paginator<ListOutgoingCertificatesCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListOutgoingCertificatesCommandInput,
  ListOutgoingCertificatesCommandOutput
>(IoTClient, ListOutgoingCertificatesCommand, "marker", "nextMarker", "pageSize");
