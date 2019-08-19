import { DescribeRouteTablesInput } from "../shapes/DescribeRouteTablesInput";
import { DescribeRouteTablesOutput } from "../shapes/DescribeRouteTablesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeRouteTables: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRouteTables",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeRouteTablesInput
  },
  output: {
    shape: DescribeRouteTablesOutput
  },
  errors: []
};
