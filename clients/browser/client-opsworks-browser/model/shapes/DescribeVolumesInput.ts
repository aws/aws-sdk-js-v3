import { _Strings } from "./_Strings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVolumesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    StackId: {
      shape: {
        type: "string"
      }
    },
    RaidArrayId: {
      shape: {
        type: "string"
      }
    },
    VolumeIds: {
      shape: _Strings
    }
  }
};
