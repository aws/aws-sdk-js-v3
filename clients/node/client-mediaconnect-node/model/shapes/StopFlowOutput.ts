import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopFlowOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FlowArn: {
      shape: {
        type: "string"
      },
      locationName: "flowArn"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    }
  }
};
