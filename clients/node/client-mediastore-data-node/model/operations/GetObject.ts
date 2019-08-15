import { GetObjectInput } from "../shapes/GetObjectInput";
import { GetObjectOutput } from "../shapes/GetObjectOutput";
import { ContainerNotFoundException } from "../shapes/ContainerNotFoundException";
import { ObjectNotFoundException } from "../shapes/ObjectNotFoundException";
import { RequestedRangeNotSatisfiableException } from "../shapes/RequestedRangeNotSatisfiableException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetObject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetObject",
  http: {
    method: "GET",
    requestUri: "/{Path+}"
  },
  input: {
    shape: GetObjectInput
  },
  output: {
    shape: GetObjectOutput
  },
  errors: [
    {
      shape: ContainerNotFoundException
    },
    {
      shape: ObjectNotFoundException
    },
    {
      shape: RequestedRangeNotSatisfiableException
    },
    {
      shape: InternalServerError
    }
  ]
};
