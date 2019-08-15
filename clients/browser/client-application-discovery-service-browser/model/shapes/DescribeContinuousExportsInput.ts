import { _ContinuousExportIds } from "./_ContinuousExportIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeContinuousExportsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    exportIds: {
      shape: _ContinuousExportIds
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
