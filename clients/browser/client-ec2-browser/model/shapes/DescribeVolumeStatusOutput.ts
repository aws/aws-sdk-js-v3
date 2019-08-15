import { _VolumeStatusList } from "./_VolumeStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVolumeStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    VolumeStatuses: {
      shape: _VolumeStatusList,
      locationName: "volumeStatusSet"
    }
  }
};
