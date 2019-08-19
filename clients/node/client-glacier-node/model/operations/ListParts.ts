import { ListPartsInput } from "../shapes/ListPartsInput";
import { ListPartsOutput } from "../shapes/ListPartsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListParts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListParts",
  http: {
    method: "GET",
    requestUri: "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}"
  },
  input: {
    shape: ListPartsInput
  },
  output: {
    shape: ListPartsOutput
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
