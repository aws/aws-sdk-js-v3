import { CreateAccountAliasInput } from "../shapes/CreateAccountAliasInput";
import { CreateAccountAliasOutput } from "../shapes/CreateAccountAliasOutput";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateAccountAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAccountAlias",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAccountAliasInput
  },
  output: {
    shape: CreateAccountAliasOutput
  },
  errors: [
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
