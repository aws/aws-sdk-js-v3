import { CreateOpenIDConnectProviderInput } from "./CreateOpenIDConnectProviderInput";
import { CreateOpenIDConnectProviderOutput } from "./CreateOpenIDConnectProviderOutput";
import { InvalidInputException } from "./InvalidInputException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
