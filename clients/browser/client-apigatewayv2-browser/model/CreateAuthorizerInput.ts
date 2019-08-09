import { _IdentitySourceList } from "./_IdentitySourceList";
import { _ProviderArnList } from "./_ProviderArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAuthorizerInput: _Structure_ = {
  type: "structure",
  required: [
    "ApiId",
    "AuthorizerUri",
    "AuthorizerType",
    "IdentitySource",
    "Name"
  ],
  members: {
    ApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    AuthorizerCredentialsArn: {
      shape: {
        type: "string"
      },
      locationName: "authorizerCredentialsArn"
    },
    AuthorizerResultTtlInSeconds: {
      shape: {
        type: "integer",
        min: -2147483648
      },
      locationName: "authorizerResultTtlInSeconds"
    },
    AuthorizerType: {
      shape: {
        type: "string"
      },
      locationName: "authorizerType"
    },
    AuthorizerUri: {
      shape: {
        type: "string"
      },
      locationName: "authorizerUri"
    },
    IdentitySource: {
      shape: _IdentitySourceList,
      locationName: "identitySource"
    },
    IdentityValidationExpression: {
      shape: {
        type: "string"
      },
      locationName: "identityValidationExpression"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    ProviderArns: {
      shape: _ProviderArnList,
      locationName: "providerArns"
    }
  }
};
