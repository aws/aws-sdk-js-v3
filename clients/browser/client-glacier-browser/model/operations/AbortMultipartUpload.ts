import { AbortMultipartUploadInput } from "../shapes/AbortMultipartUploadInput";
import { AbortMultipartUploadOutput } from "../shapes/AbortMultipartUploadOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AbortMultipartUpload: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AbortMultipartUpload",
  http: {
    method: "DELETE",
    requestUri: "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}"
  },
  input: {
    shape: AbortMultipartUploadInput
  },
  output: {
    shape: AbortMultipartUploadOutput
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
