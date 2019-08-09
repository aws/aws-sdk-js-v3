import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInputInput: _Structure_ = {
  type: "structure",
  required: ["inputName"],
  members: {
    inputName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "inputName"
    }
  }
};
