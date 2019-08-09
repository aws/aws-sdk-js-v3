import { UpdateSAMLProviderInput } from "./UpdateSAMLProviderInput";
import { UpdateSAMLProviderOutput } from "./UpdateSAMLProviderOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateSAMLProvider: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSAMLProvider",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateSAMLProviderInput
  },
  output: {
    shape: UpdateSAMLProviderOutput,
    resultWrapper: "UpdateSAMLProviderResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
