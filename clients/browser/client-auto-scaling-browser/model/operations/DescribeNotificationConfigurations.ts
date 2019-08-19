import { DescribeNotificationConfigurationsInput } from "../shapes/DescribeNotificationConfigurationsInput";
import { DescribeNotificationConfigurationsOutput } from "../shapes/DescribeNotificationConfigurationsOutput";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeNotificationConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeNotificationConfigurations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeNotificationConfigurationsInput
  },
  output: {
    shape: DescribeNotificationConfigurationsOutput,
    resultWrapper: "DescribeNotificationConfigurationsResult"
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
