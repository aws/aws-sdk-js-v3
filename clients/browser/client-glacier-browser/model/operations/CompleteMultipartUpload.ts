import { CompleteMultipartUploadInput } from "../shapes/CompleteMultipartUploadInput";
import { CompleteMultipartUploadOutput } from "../shapes/CompleteMultipartUploadOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CompleteMultipartUpload: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CompleteMultipartUpload",
  http: {
    method: "POST",
    requestUri: "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}"
  },
  input: {
    shape: CompleteMultipartUploadInput
  },
  output: {
    shape: CompleteMultipartUploadOutput
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
