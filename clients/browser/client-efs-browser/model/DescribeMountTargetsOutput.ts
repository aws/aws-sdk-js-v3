import { _MountTargetDescriptions } from "./_MountTargetDescriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMountTargetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    MountTargets: {
      shape: _MountTargetDescriptions
    },
    NextMarker: {
      shape: {
        type: "string"
      }
    }
  }
};
