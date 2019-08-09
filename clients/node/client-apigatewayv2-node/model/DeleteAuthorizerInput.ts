import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteAuthorizerInput: _Structure_ = {
  type: "structure",
  required: ["AuthorizerId", "ApiId"],
  members: {
    ApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    AuthorizerId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "authorizerId"
    }
  }
};
