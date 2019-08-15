import { _StreamInfo } from "./_StreamInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStreamOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StreamInfo: {
      shape: _StreamInfo
    }
  }
};
