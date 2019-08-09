import { _Strings } from "./_Strings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeServiceErrorsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackId: {
      shape: {
        type: "string"
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    ServiceErrorIds: {
      shape: _Strings
    }
  }
};
