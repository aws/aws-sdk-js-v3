// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { GuardDuty } from "../GuardDuty";
import { GuardDutyClient } from "../GuardDutyClient";

export interface GuardDutyPaginationConfiguration extends PaginationConfiguration {
  client: GuardDuty | GuardDutyClient;
}
