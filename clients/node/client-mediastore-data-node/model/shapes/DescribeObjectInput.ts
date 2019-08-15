import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeObjectInput: _Structure_ = {
  type: "structure",
  required: ["Path"],
  members: {
    Path: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "Path"
    }
  }
};
