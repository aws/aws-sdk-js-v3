import { _MapOfStringToBoolean } from "./_MapOfStringToBoolean";
import { _MapOfStringToString } from "./_MapOfStringToString";
import { _MapOfMethodResponse } from "./_MapOfMethodResponse";
import { _Integration } from "./_Integration";
import { _ListOfString } from "./_ListOfString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutMethodOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    httpMethod: {
      shape: {
        type: "string"
      }
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
    requestValidatorId: {
      shape: {
        type: "string"
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
    methodResponses: {
      shape: _MapOfMethodResponse
    },
    methodIntegration: {
      shape: _Integration
    },
    authorizationScopes: {
      shape: _ListOfString
    }
  }
};
