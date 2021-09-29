import { MTurk } from "../MTurk";
import { MTurkClient } from "../MTurkClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface MTurkPaginationConfiguration extends PaginationConfiguration {
  client: MTurk | MTurkClient;
}
