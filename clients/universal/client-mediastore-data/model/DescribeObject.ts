import { DescribeObjectInput } from "./DescribeObjectInput";
import { DescribeObjectOutput } from "./DescribeObjectOutput";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { ObjectNotFoundException } from "./ObjectNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
