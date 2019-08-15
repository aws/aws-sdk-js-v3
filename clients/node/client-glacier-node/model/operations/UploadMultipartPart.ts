import { UploadMultipartPartInput } from "../shapes/UploadMultipartPartInput";
import { UploadMultipartPartOutput } from "../shapes/UploadMultipartPartOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { RequestTimeoutException } from "../shapes/RequestTimeoutException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UploadMultipartPart: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UploadMultipartPart",
  http: {
    method: "PUT",
    requestUri: "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}"
  },
  input: {
    shape: UploadMultipartPartInput
  },
  output: {
    shape: UploadMultipartPartOutput
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
