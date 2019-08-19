import { DeleteArchiveInput } from "../shapes/DeleteArchiveInput";
import { DeleteArchiveOutput } from "../shapes/DeleteArchiveOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteArchive: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteArchive",
  http: {
    method: "DELETE",
    requestUri: "/{accountId}/vaults/{vaultName}/archives/{archiveId}"
  },
  input: {
    shape: DeleteArchiveInput
  },
  output: {
    shape: DeleteArchiveOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: MissingParameterValueException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
