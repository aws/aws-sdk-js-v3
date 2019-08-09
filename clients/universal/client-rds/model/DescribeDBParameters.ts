import { DescribeDBParametersInput } from "./DescribeDBParametersInput";
import { DescribeDBParametersOutput } from "./DescribeDBParametersOutput";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeDBParameters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDBParameters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDBParametersInput
  },
  output: {
    shape: DescribeDBParametersOutput,
    resultWrapper: "DescribeDBParametersResult"
  },
  errors: [
    {
      shape: DBParameterGroupNotFoundFault
    }
  ]
};
