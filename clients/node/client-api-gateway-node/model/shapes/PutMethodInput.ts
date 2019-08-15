import { _MapOfStringToBoolean } from "./_MapOfStringToBoolean";
import { _MapOfStringToString } from "./_MapOfStringToString";
import { _ListOfString } from "./_ListOfString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutMethodInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "resourceId", "httpMethod", "authorizationType"],
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
    authorizationType: {
      shape: {
        type: "string"
      }
    },
    authorizerId: {
      shape: {
        type: "string"
      }
    },
    apiKeyRequired: {
      shape: {
        type: "boolean"
      }
    },
    operationName: {
      shape: {
        type: "string"
      }
    },
    requestParameters: {
      shape: _MapOfStringToBoolean
    },
    requestModels: {
      shape: _MapOfStringToString
    },
    requestValidatorId: {
      shape: {
        type: "string"
      }
    },
    authorizationScopes: {
      shape: _ListOfString
    }
  }
};
