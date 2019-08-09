import { _ListOfARNs } from "./_ListOfARNs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAuthorizerInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "name", "type"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    name: {
      shape: {
        type: "string"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    providerARNs: {
      shape: _ListOfARNs
    },
    authType: {
      shape: {
        type: "string"
      }
    },
    authorizerUri: {
      shape: {
        type: "string"
      }
    },
    authorizerCredentials: {
      shape: {
        type: "string"
      }
    },
    identitySource: {
      shape: {
        type: "string"
      }
    },
    identityValidationExpression: {
      shape: {
        type: "string"
      }
    },
    authorizerResultTtlInSeconds: {
      shape: {
        type: "integer"
      }
    }
  }
};
