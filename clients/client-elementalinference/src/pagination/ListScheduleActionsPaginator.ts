// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListScheduleActionsCommand,
  ListScheduleActionsCommandInput,
  ListScheduleActionsCommandOutput,
} from "../commands/ListScheduleActionsCommand";
import { ElementalInferenceClient } from "../ElementalInferenceClient";
import type { ElementalInferencePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListScheduleActions: (
  config: ElementalInferencePaginationConfiguration,
  input: ListScheduleActionsCommandInput,
  ...rest: any[]
) => Paginator<ListScheduleActionsCommandOutput> = createPaginator<
  ElementalInferencePaginationConfiguration,
  ListScheduleActionsCommandInput,
  ListScheduleActionsCommandOutput
>(ElementalInferenceClient, ListScheduleActionsCommand, "nextToken", "nextToken", "maxResults");
