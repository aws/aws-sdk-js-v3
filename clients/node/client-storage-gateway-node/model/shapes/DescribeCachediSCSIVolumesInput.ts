import { _VolumeARNs } from "./_VolumeARNs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCachediSCSIVolumesInput: _Structure_ = {
  type: "structure",
  required: ["VolumeARNs"],
  members: {
    VolumeARNs: {
      shape: _VolumeARNs
    }
  }
};
