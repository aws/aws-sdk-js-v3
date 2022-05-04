// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ElasticBeanstalk } from "../ElasticBeanstalk";
import { ElasticBeanstalkClient } from "../ElasticBeanstalkClient";

export interface ElasticBeanstalkPaginationConfiguration extends PaginationConfiguration {
  client: ElasticBeanstalk | ElasticBeanstalkClient;
}
