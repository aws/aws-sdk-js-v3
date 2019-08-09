import { GetSAMLProviderInput } from "./GetSAMLProviderInput";
import { GetSAMLProviderOutput } from "./GetSAMLProviderOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSAMLProvider: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSAMLProvider",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSAMLProviderInput
  },
  output: {
    shape: GetSAMLProviderOutput,
    resultWrapper: "GetSAMLProviderResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
