import { _MapOfStringToString } from "./_MapOfStringToString";
import { _MapOfStringToList } from "./_MapOfStringToList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TestInvokeAuthorizerInput: _Structure_ = {
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
    },
    headers: {
      shape: _MapOfStringToString
    },
    multiValueHeaders: {
      shape: _MapOfStringToList
    },
    pathWithQueryString: {
      shape: {
        type: "string"
      }
    },
    body: {
      shape: {
        type: "string"
      }
    },
    stageVariables: {
      shape: _MapOfStringToString
    },
    additionalContext: {
      shape: _MapOfStringToString
    }
  }
};
