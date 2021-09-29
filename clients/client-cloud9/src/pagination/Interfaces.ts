import { Cloud9 } from "../Cloud9";
import { Cloud9Client } from "../Cloud9Client";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface Cloud9PaginationConfiguration extends PaginationConfiguration {
  client: Cloud9 | Cloud9Client;
}
