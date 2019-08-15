import { _TableRestoreStatusList } from "./_TableRestoreStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTableRestoreStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TableRestoreStatusDetails: {
      shape: _TableRestoreStatusList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
