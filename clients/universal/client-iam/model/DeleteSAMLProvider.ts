import { DeleteSAMLProviderInput } from "./DeleteSAMLProviderInput";
import { DeleteSAMLProviderOutput } from "./DeleteSAMLProviderOutput";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
