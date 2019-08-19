import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTypeInput: _Structure_ = {
  type: "structure",
  required: ["apiId", "typeName", "format"],
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
    },
    format: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "format"
    }
  }
};
