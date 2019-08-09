import { GetMappingInput } from "./GetMappingInput";
import { GetMappingOutput } from "./GetMappingOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetMapping: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMapping",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetMappingInput
  },
  output: {
    shape: GetMappingOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: EntityNotFoundException
    }
  ]
};
