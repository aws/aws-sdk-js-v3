import { DeleteAccountAliasInput } from "../shapes/DeleteAccountAliasInput";
import { DeleteAccountAliasOutput } from "../shapes/DeleteAccountAliasOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteAccountAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAccountAlias",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAccountAliasInput
  },
  output: {
    shape: DeleteAccountAliasOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
