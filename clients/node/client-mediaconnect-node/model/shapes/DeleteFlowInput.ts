import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteFlowInput: _Structure_ = {
  type: "structure",
  required: ["FlowArn"],
  members: {
    FlowArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "flowArn"
    }
  }
};
