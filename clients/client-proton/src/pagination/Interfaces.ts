import { Proton } from "../Proton";
import { ProtonClient } from "../ProtonClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ProtonPaginationConfiguration extends PaginationConfiguration {
  client: Proton | ProtonClient;
}
