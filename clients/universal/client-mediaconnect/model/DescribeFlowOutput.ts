import { _Flow } from "./_Flow";
import { _Messages } from "./_Messages";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFlowOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Flow: {
      shape: _Flow,
      locationName: "flow"
    },
    Messages: {
      shape: _Messages,
      locationName: "messages"
    }
  }
};
