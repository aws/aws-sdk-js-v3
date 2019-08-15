import { _DimensionValuesWithAttributesList } from "./_DimensionValuesWithAttributesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDimensionValuesOutput: _Structure_ = {
  type: "structure",
  required: ["DimensionValues", "ReturnSize", "TotalSize"],
  members: {
    DimensionValues: {
      shape: _DimensionValuesWithAttributesList
    },
    ReturnSize: {
      shape: {
        type: "integer"
      }
    },
    TotalSize: {
      shape: {
        type: "integer"
      }
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
