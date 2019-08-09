import { GetObjectInput } from "./GetObjectInput";
import { GetObjectOutput } from "./GetObjectOutput";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { ObjectNotFoundException } from "./ObjectNotFoundException";
import { RequestedRangeNotSatisfiableException } from "./RequestedRangeNotSatisfiableException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
