// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Inspector } from "../Inspector";
import { InspectorClient } from "../InspectorClient";

export interface InspectorPaginationConfiguration extends PaginationConfiguration {
  client: Inspector | InspectorClient;
}
