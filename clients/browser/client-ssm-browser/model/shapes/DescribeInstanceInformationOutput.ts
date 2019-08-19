import { _InstanceInformationList } from "./_InstanceInformationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstanceInformationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceInformationList: {
      shape: _InstanceInformationList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
