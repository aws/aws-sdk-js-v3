import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetGatewayResponseOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    responseType: {
      shape: {
        type: "string"
      }
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
    },
    defaultResponse: {
      shape: {
        type: "boolean"
      }
    }
  }
};
