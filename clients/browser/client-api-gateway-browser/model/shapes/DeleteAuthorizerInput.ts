import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteAuthorizerInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "authorizerId"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    authorizerId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "authorizer_id"
    }
  }
};
