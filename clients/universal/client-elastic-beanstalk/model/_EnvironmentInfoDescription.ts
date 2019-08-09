import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EnvironmentInfoDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InfoType: {
      shape: {
        type: "string"
      }
    },
    Ec2InstanceId: {
      shape: {
        type: "string"
      }
    },
    SampleTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    }
  }
};
