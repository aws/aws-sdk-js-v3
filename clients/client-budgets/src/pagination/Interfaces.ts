import { Budgets } from "../Budgets";
import { BudgetsClient } from "../BudgetsClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface BudgetsPaginationConfiguration extends PaginationConfiguration {
  client: Budgets | BudgetsClient;
}
