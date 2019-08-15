import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteAuthorizerInput: _Structure_ = {
  type: "structure",
  required: ["authorizerName"],
  members: {
    authorizerName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "authorizerName"
    }
  }
};
