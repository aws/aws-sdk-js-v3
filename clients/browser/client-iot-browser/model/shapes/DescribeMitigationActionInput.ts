import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMitigationActionInput: _Structure_ = {
  type: "structure",
  required: ["actionName"],
  members: {
    actionName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "actionName"
    }
  }
};
