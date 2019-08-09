import { DescribeEndpointTypesInput } from "./DescribeEndpointTypesInput";
import { DescribeEndpointTypesOutput } from "./DescribeEndpointTypesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeEndpointTypes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEndpointTypes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEndpointTypesInput
  },
  output: {
    shape: DescribeEndpointTypesOutput
  },
  errors: []
};
