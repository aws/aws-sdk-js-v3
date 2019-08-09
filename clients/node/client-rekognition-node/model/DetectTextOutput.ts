import { _TextDetectionList } from "./_TextDetectionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectTextOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TextDetections: {
      shape: _TextDetectionList
    }
  }
};
