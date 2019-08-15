import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsInput: _Structure_ = {
  type: "structure",
  required: ["ARN"],
  members: {
    ARN: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "arn"
    }
  }
};
