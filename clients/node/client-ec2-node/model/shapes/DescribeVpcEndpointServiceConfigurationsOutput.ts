import { _ServiceConfigurationSet } from "./_ServiceConfigurationSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpcEndpointServiceConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceConfigurations: {
      shape: _ServiceConfigurationSet,
      locationName: "serviceConfigurationSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
