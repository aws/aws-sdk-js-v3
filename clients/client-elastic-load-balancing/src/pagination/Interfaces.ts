import { ElasticLoadBalancing } from "../ElasticLoadBalancing";
import { ElasticLoadBalancingClient } from "../ElasticLoadBalancingClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ElasticLoadBalancingPaginationConfiguration extends PaginationConfiguration {
  client: ElasticLoadBalancing | ElasticLoadBalancingClient;
}
