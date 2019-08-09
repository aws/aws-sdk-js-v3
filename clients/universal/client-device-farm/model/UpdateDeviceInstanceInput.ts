import { _InstanceLabels } from "./_InstanceLabels";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDeviceInstanceInput: _Structure_ = {
  type: "structure",
  required: ["arn"],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    profileArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    labels: {
      shape: _InstanceLabels
    }
  }
};
