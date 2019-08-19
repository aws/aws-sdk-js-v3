import { ListMultipartUploadsInput } from "../shapes/ListMultipartUploadsInput";
import { ListMultipartUploadsOutput } from "../shapes/ListMultipartUploadsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListMultipartUploads: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListMultipartUploads",
  http: {
    method: "GET",
    requestUri: "/{accountId}/vaults/{vaultName}/multipart-uploads"
  },
  input: {
    shape: ListMultipartUploadsInput
  },
  output: {
    shape: ListMultipartUploadsOutput
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
