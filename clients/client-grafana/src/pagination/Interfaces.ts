// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Grafana } from "../Grafana";
import { GrafanaClient } from "../GrafanaClient";

export interface GrafanaPaginationConfiguration extends PaginationConfiguration {
  client: Grafana | GrafanaClient;
}
