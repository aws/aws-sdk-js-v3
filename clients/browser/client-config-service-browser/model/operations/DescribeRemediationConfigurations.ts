import { DescribeRemediationConfigurationsInput } from "../shapes/DescribeRemediationConfigurationsInput";
import { DescribeRemediationConfigurationsOutput } from "../shapes/DescribeRemediationConfigurationsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeRemediationConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRemediationConfigurations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeRemediationConfigurationsInput
  },
  output: {
    shape: DescribeRemediationConfigurationsOutput
  },
  errors: []
};
