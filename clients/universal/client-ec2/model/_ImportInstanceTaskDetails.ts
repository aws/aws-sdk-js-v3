import { _ImportInstanceVolumeDetailSet } from "./_ImportInstanceVolumeDetailSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ImportInstanceTaskDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    Platform: {
      shape: {
        type: "string"
      },
      locationName: "platform"
    },
    Volumes: {
      shape: _ImportInstanceVolumeDetailSet,
      locationName: "volumes"
    }
  }
};
