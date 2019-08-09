import { DescribeContainerInput } from "./DescribeContainerInput";
import { DescribeContainerOutput } from "./DescribeContainerOutput";
import { ContainerNotFoundException } from "./ContainerNotFoundException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
