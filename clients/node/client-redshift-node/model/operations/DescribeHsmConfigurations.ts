import { DescribeHsmConfigurationsInput } from "../shapes/DescribeHsmConfigurationsInput";
import { DescribeHsmConfigurationsOutput } from "../shapes/DescribeHsmConfigurationsOutput";
import { HsmConfigurationNotFoundFault } from "../shapes/HsmConfigurationNotFoundFault";
import { InvalidTagFault } from "../shapes/InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeHsmConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeHsmConfigurations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeHsmConfigurationsInput
  },
  output: {
    shape: DescribeHsmConfigurationsOutput,
    resultWrapper: "DescribeHsmConfigurationsResult"
  },
  errors: [
    {
      shape: HsmConfigurationNotFoundFault
    },
    {
      shape: InvalidTagFault
    }
  ]
};
