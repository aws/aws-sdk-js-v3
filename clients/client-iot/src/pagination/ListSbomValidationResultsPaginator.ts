// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSbomValidationResultsCommand,
  ListSbomValidationResultsCommandInput,
  ListSbomValidationResultsCommandOutput,
} from "../commands/ListSbomValidationResultsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSbomValidationResults: (
  config: IoTPaginationConfiguration,
  input: ListSbomValidationResultsCommandInput,
  ...rest: any[]
) => Paginator<ListSbomValidationResultsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListSbomValidationResultsCommandInput,
  ListSbomValidationResultsCommandOutput
>(IoTClient, ListSbomValidationResultsCommand, "nextToken", "nextToken", "maxResults");
