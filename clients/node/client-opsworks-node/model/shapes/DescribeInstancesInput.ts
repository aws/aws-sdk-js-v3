import { _Strings } from "./_Strings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstancesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackId: {
      shape: {
        type: "string"
      }
    },
    LayerId: {
      shape: {
        type: "string"
      }
    },
    InstanceIds: {
      shape: _Strings
    }
  }
};
