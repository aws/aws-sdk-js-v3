import { _MapOfStringToString } from "./_MapOfStringToString";
import { _ListOfString } from "./_ListOfString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutIntegrationInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "resourceId", "httpMethod", "type"],
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
    type: {
      shape: {
        type: "string"
      }
    },
    integrationHttpMethod: {
      shape: {
        type: "string"
      },
      locationName: "httpMethod"
    },
    uri: {
      shape: {
        type: "string"
      }
    },
    connectionType: {
      shape: {
        type: "string"
      }
    },
    connectionId: {
      shape: {
        type: "string"
      }
    },
    credentials: {
      shape: {
        type: "string"
      }
    },
    requestParameters: {
      shape: _MapOfStringToString
    },
    requestTemplates: {
      shape: _MapOfStringToString
    },
    passthroughBehavior: {
      shape: {
        type: "string"
      }
    },
    cacheNamespace: {
      shape: {
        type: "string"
      }
    },
    cacheKeyParameters: {
      shape: _ListOfString
    },
    contentHandling: {
      shape: {
        type: "string"
      }
    },
    timeoutInMillis: {
      shape: {
        type: "integer"
      }
    }
  }
};
