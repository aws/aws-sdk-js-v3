import { DescribeEngineDefaultClusterParametersInput } from "./DescribeEngineDefaultClusterParametersInput";
import { DescribeEngineDefaultClusterParametersOutput } from "./DescribeEngineDefaultClusterParametersOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeEngineDefaultClusterParameters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEngineDefaultClusterParameters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEngineDefaultClusterParametersInput
  },
  output: {
    shape: DescribeEngineDefaultClusterParametersOutput,
    resultWrapper: "DescribeEngineDefaultClusterParametersResult"
  },
  errors: []
};
