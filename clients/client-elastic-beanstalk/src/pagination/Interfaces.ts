import { ElasticBeanstalk } from "../ElasticBeanstalk";
import { ElasticBeanstalkClient } from "../ElasticBeanstalkClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ElasticBeanstalkPaginationConfiguration extends PaginationConfiguration {
  client: ElasticBeanstalk | ElasticBeanstalkClient;
}
