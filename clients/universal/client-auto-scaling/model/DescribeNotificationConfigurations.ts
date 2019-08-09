import { DescribeNotificationConfigurationsInput } from "./DescribeNotificationConfigurationsInput";
import { DescribeNotificationConfigurationsOutput } from "./DescribeNotificationConfigurationsOutput";
import { InvalidNextToken } from "./InvalidNextToken";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
