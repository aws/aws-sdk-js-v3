import { GetAccountAuthorizationDetailsInput } from "./GetAccountAuthorizationDetailsInput";
import { GetAccountAuthorizationDetailsOutput } from "./GetAccountAuthorizationDetailsOutput";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetAccountAuthorizationDetails: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAccountAuthorizationDetails",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAccountAuthorizationDetailsInput
  },
  output: {
    shape: GetAccountAuthorizationDetailsOutput,
    resultWrapper: "GetAccountAuthorizationDetailsResult"
  },
  errors: [
    {
      shape: ServiceFailureException
    }
  ]
};
