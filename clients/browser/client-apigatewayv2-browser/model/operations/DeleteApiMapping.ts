import { DeleteApiMappingInput } from "../shapes/DeleteApiMappingInput";
import { DeleteApiMappingOutput } from "../shapes/DeleteApiMappingOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteApiMapping: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteApiMapping",
  http: {
    method: "DELETE",
    requestUri: "/v2/domainnames/{domainName}/apimappings/{apiMappingId}"
  },
  input: {
    shape: DeleteApiMappingInput
  },
  output: {
    shape: DeleteApiMappingOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    }
  ]
};
