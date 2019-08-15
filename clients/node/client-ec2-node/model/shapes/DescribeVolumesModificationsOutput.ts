import { _VolumeModificationList } from "./_VolumeModificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVolumesModificationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VolumesModifications: {
      shape: _VolumeModificationList,
      locationName: "volumeModificationSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
