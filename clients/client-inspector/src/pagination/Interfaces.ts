import { Inspector } from "../Inspector";
import { InspectorClient } from "../InspectorClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface InspectorPaginationConfiguration extends PaginationConfiguration {
  client: Inspector | InspectorClient;
}
