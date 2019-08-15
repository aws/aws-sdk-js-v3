import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteApiInput: _Structure_ = {
  type: "structure",
  required: ["ApiId"],
  members: {
    ApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    }
  }
};
