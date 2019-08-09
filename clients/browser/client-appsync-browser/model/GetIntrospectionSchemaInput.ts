import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetIntrospectionSchemaInput: _Structure_ = {
  type: "structure",
  required: ["apiId", "format"],
  members: {
    apiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    format: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "format"
    },
    includeDirectives: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "includeDirectives"
    }
  }
};
