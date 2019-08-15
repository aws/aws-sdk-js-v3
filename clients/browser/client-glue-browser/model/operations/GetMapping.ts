import { GetMappingInput } from "../shapes/GetMappingInput";
import { GetMappingOutput } from "../shapes/GetMappingOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
