import { Commander } from "../Commander";
import { CommanderClient } from "../CommanderClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface CommanderPaginationConfiguration extends PaginationConfiguration {
  client: Commander | CommanderClient;
}
