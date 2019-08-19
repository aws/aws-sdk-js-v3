import { UpdateSAMLProviderInput } from "../shapes/UpdateSAMLProviderInput";
import { UpdateSAMLProviderOutput } from "../shapes/UpdateSAMLProviderOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
