import { DescribeContainerInput } from "../shapes/DescribeContainerInput";
import { DescribeContainerOutput } from "../shapes/DescribeContainerOutput";
import { ContainerNotFoundException } from "../shapes/ContainerNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeContainer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeContainer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeContainerInput
  },
  output: {
    shape: DescribeContainerOutput
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
