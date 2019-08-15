import { _UpdateActionList } from "./_UpdateActionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUpdateActionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    UpdateActions: {
      shape: _UpdateActionList
    }
  }
};
