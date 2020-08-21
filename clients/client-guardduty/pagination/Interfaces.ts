import { GuardDuty } from "../GuardDuty";
import { GuardDutyClient } from "../GuardDutyClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface GuardDutyPaginationConfiguration extends PaginationConfiguration {
  client: GuardDuty | GuardDutyClient;
}
