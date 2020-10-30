import { WorkMail } from "../WorkMail";
import { WorkMailClient } from "../WorkMailClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface WorkMailPaginationConfiguration extends PaginationConfiguration {
  client: WorkMail | WorkMailClient;
}
