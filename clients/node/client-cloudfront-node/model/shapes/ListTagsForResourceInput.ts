import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForResourceInput: _Structure_ = {
  type: "structure",
  required: ["Resource"],
  members: {
    Resource: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "Resource"
    }
  }
};
