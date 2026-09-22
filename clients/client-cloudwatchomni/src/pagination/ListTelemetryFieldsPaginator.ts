// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchOmniClient } from "../CloudWatchOmniClient";
import {
  ListTelemetryFieldsCommand,
  ListTelemetryFieldsCommandInput,
  ListTelemetryFieldsCommandOutput,
} from "../commands/ListTelemetryFieldsCommand";
import type { CloudWatchOmniPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTelemetryFields: (
  config: CloudWatchOmniPaginationConfiguration,
  input: ListTelemetryFieldsCommandInput,
  ...rest: any[]
) => Paginator<ListTelemetryFieldsCommandOutput> = createPaginator<
  CloudWatchOmniPaginationConfiguration,
  ListTelemetryFieldsCommandInput,
  ListTelemetryFieldsCommandOutput
>(CloudWatchOmniClient, ListTelemetryFieldsCommand, "nextToken", "nextToken", "");
