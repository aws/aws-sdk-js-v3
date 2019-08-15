import { UploadArchiveInput } from "../shapes/UploadArchiveInput";
import { UploadArchiveOutput } from "../shapes/UploadArchiveOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { RequestTimeoutException } from "../shapes/RequestTimeoutException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UploadArchive: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UploadArchive",
  http: {
    method: "POST",
    requestUri: "/{accountId}/vaults/{vaultName}/archives"
  },
  input: {
    shape: UploadArchiveInput
  },
  output: {
    shape: UploadArchiveOutput
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
      shape: RequestTimeoutException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
