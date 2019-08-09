import { PutObjectInput } from "./PutObjectInput";
import { PutObjectOutput } from "./PutObjectOutput";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutObject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutObject",
  http: {
    method: "PUT",
    requestUri: "/{Path+}"
  },
  input: {
    shape: PutObjectInput
  },
  output: {
    shape: PutObjectOutput
  },
  errors: [
    {
      shape: ContainerNotFoundException
    },
    {
      shape: InternalServerError
    }
  ]
};
