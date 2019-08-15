import { CreateOpenIDConnectProviderInput } from "../shapes/CreateOpenIDConnectProviderInput";
import { CreateOpenIDConnectProviderOutput } from "../shapes/CreateOpenIDConnectProviderOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateOpenIDConnectProvider: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateOpenIDConnectProvider",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateOpenIDConnectProviderInput
  },
  output: {
    shape: CreateOpenIDConnectProviderOutput,
    resultWrapper: "CreateOpenIDConnectProviderResult"
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
