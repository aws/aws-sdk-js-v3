import { _MapOfStringToString } from "./_MapOfStringToString";
import { _MapOfStringToList } from "./_MapOfStringToList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TestInvokeMethodInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "resourceId", "httpMethod"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    resourceId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "resource_id"
    },
    httpMethod: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "http_method"
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
    headers: {
      shape: _MapOfStringToString
    },
    multiValueHeaders: {
      shape: _MapOfStringToList
    },
    clientCertificateId: {
      shape: {
        type: "string"
      }
    },
    stageVariables: {
      shape: _MapOfStringToString
    }
  }
};
