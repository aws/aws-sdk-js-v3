import { DeleteSAMLProviderInput } from "../shapes/DeleteSAMLProviderInput";
import { DeleteSAMLProviderOutput } from "../shapes/DeleteSAMLProviderOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSAMLProvider: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSAMLProvider",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSAMLProviderInput
  },
  output: {
    shape: DeleteSAMLProviderOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
