import { _ClassicLinkInstanceList } from "./_ClassicLinkInstanceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClassicLinkInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Instances: {
      shape: _ClassicLinkInstanceList,
      locationName: "instancesSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
