import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForResourceInput: _Structure_ = {
  type: "structure",
  required: ["resourceArn"],
  members: {
    resourceArn: {
      shape: {
        type: "string",
        min: 70
      },
      location: "uri",
      locationName: "resourceArn"
    }
  }
};
