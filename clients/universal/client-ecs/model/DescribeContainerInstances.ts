import { DescribeContainerInstancesInput } from "./DescribeContainerInstancesInput";
import { DescribeContainerInstancesOutput } from "./DescribeContainerInstancesOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
