import { _VolumeSpecification } from "./_VolumeSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EbsBlockDeviceConfig: _Structure_ = {
  type: "structure",
  required: ["VolumeSpecification"],
  members: {
    VolumeSpecification: {
      shape: _VolumeSpecification
    },
    VolumesPerInstance: {
      shape: {
        type: "integer"
      }
    }
  }
};
