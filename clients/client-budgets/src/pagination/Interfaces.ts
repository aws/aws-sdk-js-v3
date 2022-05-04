// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Budgets } from "../Budgets";
import { BudgetsClient } from "../BudgetsClient";

export interface BudgetsPaginationConfiguration extends PaginationConfiguration {
  client: Budgets | BudgetsClient;
}
