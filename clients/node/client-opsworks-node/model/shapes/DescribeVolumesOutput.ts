import { _Volumes } from "./_Volumes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVolumesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Volumes: {
      shape: _Volumes
    }
  }
};
