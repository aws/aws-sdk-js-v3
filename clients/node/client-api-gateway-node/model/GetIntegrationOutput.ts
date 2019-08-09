import { _MapOfStringToString } from "./_MapOfStringToString";
import { _ListOfString } from "./_ListOfString";
import { _MapOfIntegrationResponse } from "./_MapOfIntegrationResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetIntegrationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    type: {
      shape: {
        type: "string"
      }
    },
    httpMethod: {
      shape: {
        type: "string"
      }
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
    contentHandling: {
      shape: {
        type: "string"
      }
    },
    timeoutInMillis: {
      shape: {
        type: "integer"
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
    integrationResponses: {
      shape: _MapOfIntegrationResponse
    }
  }
};
