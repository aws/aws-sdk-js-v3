import { _CachediSCSIVolumes } from "./_CachediSCSIVolumes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCachediSCSIVolumesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CachediSCSIVolumes: {
      shape: _CachediSCSIVolumes
    }
  }
};
