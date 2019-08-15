import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTypeInput: _Structure_ = {
  type: "structure",
  required: ["apiId", "typeName"],
  members: {
    apiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    typeName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "typeName"
    }
  }
};
