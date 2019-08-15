import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteGatewayResponseInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "responseType"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    responseType: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "response_type"
    }
  }
};
