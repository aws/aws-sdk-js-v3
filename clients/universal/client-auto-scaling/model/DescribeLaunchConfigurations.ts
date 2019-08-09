import { DescribeLaunchConfigurationsInput } from "./DescribeLaunchConfigurationsInput";
import { DescribeLaunchConfigurationsOutput } from "./DescribeLaunchConfigurationsOutput";
import { InvalidNextToken } from "./InvalidNextToken";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeLaunchConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLaunchConfigurations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLaunchConfigurationsInput
  },
  output: {
    shape: DescribeLaunchConfigurationsOutput,
    resultWrapper: "DescribeLaunchConfigurationsResult"
  },
  errors: [
    {
      shape: InvalidNextToken
    },
    {
      shape: ResourceContentionFault
    }
  ]
};
