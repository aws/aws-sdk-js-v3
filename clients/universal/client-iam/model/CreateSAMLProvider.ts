import { CreateSAMLProviderInput } from "./CreateSAMLProviderInput";
import { CreateSAMLProviderOutput } from "./CreateSAMLProviderOutput";
import { InvalidInputException } from "./InvalidInputException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateSAMLProvider: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSAMLProvider",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSAMLProviderInput
  },
  output: {
    shape: CreateSAMLProviderOutput,
    resultWrapper: "CreateSAMLProviderResult"
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
