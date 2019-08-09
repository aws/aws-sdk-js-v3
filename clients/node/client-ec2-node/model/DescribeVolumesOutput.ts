import { _VolumeList } from "./_VolumeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVolumesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Volumes: {
      shape: _VolumeList,
      locationName: "volumeSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
