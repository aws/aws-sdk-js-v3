// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListThirdPartyTelemetryEnrichmentsCommand,
  ListThirdPartyTelemetryEnrichmentsCommandInput,
  ListThirdPartyTelemetryEnrichmentsCommandOutput,
} from "../commands/ListThirdPartyTelemetryEnrichmentsCommand";
import { ObservabilityAdminClient } from "../ObservabilityAdminClient";
import type { ObservabilityAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThirdPartyTelemetryEnrichments: (
  config: ObservabilityAdminPaginationConfiguration,
  input: ListThirdPartyTelemetryEnrichmentsCommandInput,
  ...rest: any[]
) => Paginator<ListThirdPartyTelemetryEnrichmentsCommandOutput> = createPaginator<
  ObservabilityAdminPaginationConfiguration,
  ListThirdPartyTelemetryEnrichmentsCommandInput,
  ListThirdPartyTelemetryEnrichmentsCommandOutput
>(ObservabilityAdminClient, ListThirdPartyTelemetryEnrichmentsCommand, "NextToken", "NextToken", "MaxResults");
