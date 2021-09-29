import { DataBrew } from "../DataBrew";
import { DataBrewClient } from "../DataBrewClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface DataBrewPaginationConfiguration extends PaginationConfiguration {
  client: DataBrew | DataBrewClient;
}
