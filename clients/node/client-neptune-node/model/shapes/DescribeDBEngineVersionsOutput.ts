import { _DBEngineVersionList } from "./_DBEngineVersionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBEngineVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    DBEngineVersions: {
      shape: _DBEngineVersionList
    }
  }
};
