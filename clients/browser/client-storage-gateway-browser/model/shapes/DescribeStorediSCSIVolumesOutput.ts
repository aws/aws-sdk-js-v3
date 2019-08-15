import { _StorediSCSIVolumes } from "./_StorediSCSIVolumes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStorediSCSIVolumesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StorediSCSIVolumes: {
      shape: _StorediSCSIVolumes
    }
  }
};
