import { _Strings } from "./_Strings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCommandsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeploymentId: {
      shape: {
        type: "string"
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    CommandIds: {
      shape: _Strings
    }
  }
};
