// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ECS } from "../ECS";
import { ECSClient } from "../ECSClient";

export interface ECSPaginationConfiguration extends PaginationConfiguration {
  client: ECS | ECSClient;
}
