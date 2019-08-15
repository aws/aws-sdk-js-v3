import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutGatewayResponseInput: _Structure_ = {
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
    },
    statusCode: {
      shape: {
        type: "string"
      }
    },
    responseParameters: {
      shape: _MapOfStringToString
    },
    responseTemplates: {
      shape: _MapOfStringToString
    }
  }
};
