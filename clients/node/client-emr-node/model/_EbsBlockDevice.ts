import { _VolumeSpecification } from "./_VolumeSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EbsBlockDevice: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VolumeSpecification: {
      shape: _VolumeSpecification
    },
    Device: {
      shape: {
        type: "string"
      }
    }
  }
};
