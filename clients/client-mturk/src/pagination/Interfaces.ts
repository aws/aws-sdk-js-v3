// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { MTurk } from "../MTurk";
import { MTurkClient } from "../MTurkClient";

export interface MTurkPaginationConfiguration extends PaginationConfiguration {
  client: MTurk | MTurkClient;
}
