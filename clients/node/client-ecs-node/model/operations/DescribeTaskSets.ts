import { DescribeTaskSetsInput } from "../shapes/DescribeTaskSetsInput";
import { DescribeTaskSetsOutput } from "../shapes/DescribeTaskSetsOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { UnsupportedFeatureException } from "../shapes/UnsupportedFeatureException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ServiceNotFoundException } from "../shapes/ServiceNotFoundException";
import { ServiceNotActiveException } from "../shapes/ServiceNotActiveException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTaskSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTaskSets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTaskSetsInput
  },
  output: {
    shape: DescribeTaskSetsOutput
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
    },
    {
      shape: UnsupportedFeatureException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: ServiceNotFoundException
    },
    {
      shape: ServiceNotActiveException
    }
  ]
};
