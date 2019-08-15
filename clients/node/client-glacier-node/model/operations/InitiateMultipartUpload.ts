import { InitiateMultipartUploadInput } from "../shapes/InitiateMultipartUploadInput";
import { InitiateMultipartUploadOutput } from "../shapes/InitiateMultipartUploadOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const InitiateMultipartUpload: _Operation_ = {
  metadata: ServiceMetadata,
  name: "InitiateMultipartUpload",
  http: {
    method: "POST",
    requestUri: "/{accountId}/vaults/{vaultName}/multipart-uploads"
  },
  input: {
    shape: InitiateMultipartUploadInput
  },
  output: {
    shape: InitiateMultipartUploadOutput
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
