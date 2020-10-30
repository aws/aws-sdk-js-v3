import { ECS } from "../ECS";
import { ECSClient } from "../ECSClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ECSPaginationConfiguration extends PaginationConfiguration {
  client: ECS | ECSClient;
}
