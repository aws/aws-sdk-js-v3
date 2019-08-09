import { _InstanceStatusList } from "./_InstanceStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstanceStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceStatuses: {
      shape: _InstanceStatusList,
      locationName: "instanceStatusSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
