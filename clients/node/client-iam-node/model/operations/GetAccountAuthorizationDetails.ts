import { GetAccountAuthorizationDetailsInput } from "../shapes/GetAccountAuthorizationDetailsInput";
import { GetAccountAuthorizationDetailsOutput } from "../shapes/GetAccountAuthorizationDetailsOutput";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
