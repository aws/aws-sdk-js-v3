import { _ContinuousExportDescriptions } from "./_ContinuousExportDescriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeContinuousExportsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    descriptions: {
      shape: _ContinuousExportDescriptions
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
