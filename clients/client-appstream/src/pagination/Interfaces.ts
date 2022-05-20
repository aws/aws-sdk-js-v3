// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { AppStream } from "../AppStream";
import { AppStreamClient } from "../AppStreamClient";

export interface AppStreamPaginationConfiguration extends PaginationConfiguration {
  client: AppStream | AppStreamClient;
}
