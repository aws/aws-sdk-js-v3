// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ElasticLoadBalancingV2 } from "../ElasticLoadBalancingV2";
import { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client";

export interface ElasticLoadBalancingV2PaginationConfiguration extends PaginationConfiguration {
  client: ElasticLoadBalancingV2 | ElasticLoadBalancingV2Client;
}
