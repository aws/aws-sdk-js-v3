import { _VolumeModification } from "./_VolumeModification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyVolumeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VolumeModification: {
      shape: _VolumeModification,
      locationName: "volumeModification"
    }
  }
};
