// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEvaluationFormsCommand,
  ListEvaluationFormsCommandInput,
  ListEvaluationFormsCommandOutput,
} from "../commands/ListEvaluationFormsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEvaluationForms: (
  config: ConnectPaginationConfiguration,
  input: ListEvaluationFormsCommandInput,
  ...rest: any[]
) => Paginator<ListEvaluationFormsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListEvaluationFormsCommandInput,
  ListEvaluationFormsCommandOutput
>(ConnectClient, ListEvaluationFormsCommand, "NextToken", "NextToken", "MaxResults");
