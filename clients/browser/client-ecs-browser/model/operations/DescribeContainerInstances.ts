import { DescribeContainerInstancesInput } from "../shapes/DescribeContainerInstancesInput";
import { DescribeContainerInstancesOutput } from "../shapes/DescribeContainerInstancesOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeContainerInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeContainerInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeContainerInstancesInput
  },
  output: {
    shape: DescribeContainerInstancesOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: ClientException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ClusterNotFoundException
    }
  ]
};
