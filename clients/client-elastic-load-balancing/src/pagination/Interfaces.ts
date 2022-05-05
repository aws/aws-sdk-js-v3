// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ElasticLoadBalancing } from "../ElasticLoadBalancing";
import { ElasticLoadBalancingClient } from "../ElasticLoadBalancingClient";

export interface ElasticLoadBalancingPaginationConfiguration extends PaginationConfiguration {
  client: ElasticLoadBalancing | ElasticLoadBalancingClient;
}
