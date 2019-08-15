import { _AuthInfos } from "./_AuthInfos";
import { _PolicyNames } from "./_PolicyNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TestAuthorizationInput: _Structure_ = {
  type: "structure",
  required: ["authInfos"],
  members: {
    principal: {
      shape: {
        type: "string"
      }
    },
    cognitoIdentityPoolId: {
      shape: {
        type: "string"
      }
    },
    authInfos: {
      shape: _AuthInfos
    },
    clientId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "clientId"
    },
    policyNamesToAdd: {
      shape: _PolicyNames
    },
    policyNamesToSkip: {
      shape: _PolicyNames
    }
  }
};
