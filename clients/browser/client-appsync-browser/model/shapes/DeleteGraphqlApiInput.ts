import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteGraphqlApiInput: _Structure_ = {
  type: "structure",
  required: ["apiId"],
  members: {
    apiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    }
  }
};
