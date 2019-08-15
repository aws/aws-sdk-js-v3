import { DescribeTransitGatewayRouteTablesInput } from "../shapes/DescribeTransitGatewayRouteTablesInput";
import { DescribeTransitGatewayRouteTablesOutput } from "../shapes/DescribeTransitGatewayRouteTablesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTransitGatewayRouteTables: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTransitGatewayRouteTables",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTransitGatewayRouteTablesInput
  },
  output: {
    shape: DescribeTransitGatewayRouteTablesOutput
  },
  errors: []
};
