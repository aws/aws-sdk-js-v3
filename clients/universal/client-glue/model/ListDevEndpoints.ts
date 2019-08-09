import { ListDevEndpointsInput } from "./ListDevEndpointsInput";
import { ListDevEndpointsOutput } from "./ListDevEndpointsOutput";
import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
