import { GetSAMLProviderInput } from "../shapes/GetSAMLProviderInput";
import { GetSAMLProviderOutput } from "../shapes/GetSAMLProviderOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
