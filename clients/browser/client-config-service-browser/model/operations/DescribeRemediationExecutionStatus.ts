import { DescribeRemediationExecutionStatusInput } from "../shapes/DescribeRemediationExecutionStatusInput";
import { DescribeRemediationExecutionStatusOutput } from "../shapes/DescribeRemediationExecutionStatusOutput";
import { NoSuchRemediationConfigurationException } from "../shapes/NoSuchRemediationConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeRemediationExecutionStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRemediationExecutionStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeRemediationExecutionStatusInput
  },
  output: {
    shape: DescribeRemediationExecutionStatusOutput
  },
  errors: [
    {
      shape: NoSuchRemediationConfigurationException
    }
  ]
};
