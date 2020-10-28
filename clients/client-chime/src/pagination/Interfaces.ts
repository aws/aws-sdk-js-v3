import { Chime } from "../Chime";
import { ChimeClient } from "../ChimeClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ChimePaginationConfiguration extends PaginationConfiguration {
  client: Chime | ChimeClient;
}
