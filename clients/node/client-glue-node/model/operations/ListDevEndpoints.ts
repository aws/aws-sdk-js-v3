import { ListDevEndpointsInput } from "../shapes/ListDevEndpointsInput";
import { ListDevEndpointsOutput } from "../shapes/ListDevEndpointsOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDevEndpoints: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDevEndpoints",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDevEndpointsInput
  },
  output: {
    shape: ListDevEndpointsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: EntityNotFoundException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
