import { CreateSAMLProviderInput } from "../shapes/CreateSAMLProviderInput";
import { CreateSAMLProviderOutput } from "../shapes/CreateSAMLProviderOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
