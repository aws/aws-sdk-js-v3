// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeListenerCertificatesCommand,
  DescribeListenerCertificatesCommandInput,
  DescribeListenerCertificatesCommandOutput,
} from "../commands/DescribeListenerCertificatesCommand";
import { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client";
import { ElasticLoadBalancingV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeListenerCertificates: (
  config: ElasticLoadBalancingV2PaginationConfiguration,
  input: DescribeListenerCertificatesCommandInput,
  ...rest: any[]
) => Paginator<DescribeListenerCertificatesCommandOutput> = createPaginator<
  ElasticLoadBalancingV2PaginationConfiguration,
  DescribeListenerCertificatesCommandInput,
  DescribeListenerCertificatesCommandOutput
>(ElasticLoadBalancingV2Client, DescribeListenerCertificatesCommand, "Marker", "NextMarker", "");
