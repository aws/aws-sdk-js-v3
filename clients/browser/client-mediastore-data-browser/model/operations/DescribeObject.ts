import { DescribeObjectInput } from "../shapes/DescribeObjectInput";
import { DescribeObjectOutput } from "../shapes/DescribeObjectOutput";
import { ContainerNotFoundException } from "../shapes/ContainerNotFoundException";
import { ObjectNotFoundException } from "../shapes/ObjectNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeObject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeObject",
  http: {
    method: "HEAD",
    requestUri: "/{Path+}"
  },
  input: {
    shape: DescribeObjectInput
  },
  output: {
    shape: DescribeObjectOutput
  },
  errors: [
    {
      shape: ContainerNotFoundException
    },
    {
      shape: ObjectNotFoundException
    },
    {
      shape: InternalServerError
    }
  ]
};
