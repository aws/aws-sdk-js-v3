import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInputInput: _Structure_ = {
  type: "structure",
  required: ["InputId"],
  members: {
    InputId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "inputId"
    }
  }
};
