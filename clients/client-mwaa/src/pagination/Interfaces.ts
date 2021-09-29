import { MWAA } from "../MWAA";
import { MWAAClient } from "../MWAAClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface MWAAPaginationConfiguration extends PaginationConfiguration {
  client: MWAA | MWAAClient;
}
