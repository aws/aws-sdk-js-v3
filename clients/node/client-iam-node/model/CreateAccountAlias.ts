import { CreateAccountAliasInput } from "./CreateAccountAliasInput";
import { CreateAccountAliasOutput } from "./CreateAccountAliasOutput";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
