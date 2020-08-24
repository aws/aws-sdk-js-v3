import { FSx } from "../FSx";
import { FSxClient } from "../FSxClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface FSxPaginationConfiguration extends PaginationConfiguration {
  client: FSx | FSxClient;
}
