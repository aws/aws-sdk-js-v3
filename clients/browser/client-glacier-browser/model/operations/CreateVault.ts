import { CreateVaultInput } from "../shapes/CreateVaultInput";
import { CreateVaultOutput } from "../shapes/CreateVaultOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateVault: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVault",
  http: {
    method: "PUT",
    requestUri: "/{accountId}/vaults/{vaultName}"
  },
  input: {
    shape: CreateVaultInput
  },
  output: {
    shape: CreateVaultOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: MissingParameterValueException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: LimitExceededException
    }
  ]
};
