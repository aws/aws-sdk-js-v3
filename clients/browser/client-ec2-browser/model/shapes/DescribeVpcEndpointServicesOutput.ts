import { _ValueStringList } from "./_ValueStringList";
import { _ServiceDetailSet } from "./_ServiceDetailSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpcEndpointServicesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceNames: {
      shape: _ValueStringList,
      locationName: "serviceNameSet"
    },
    ServiceDetails: {
      shape: _ServiceDetailSet,
      locationName: "serviceDetailSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
