import { DeleteAccountAliasInput } from "./DeleteAccountAliasInput";
import { DeleteAccountAliasOutput } from "./DeleteAccountAliasOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
