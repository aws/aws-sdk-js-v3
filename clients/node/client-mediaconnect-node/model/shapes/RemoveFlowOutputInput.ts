import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveFlowOutputInput: _Structure_ = {
  type: "structure",
  required: ["FlowArn", "OutputArn"],
  members: {
    FlowArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "flowArn"
    },
    OutputArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "outputArn"
    }
  }
};
