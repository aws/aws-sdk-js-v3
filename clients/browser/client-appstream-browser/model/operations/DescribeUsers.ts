import { DescribeUsersInput } from "../shapes/DescribeUsersInput";
import { DescribeUsersOutput } from "../shapes/DescribeUsersOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeUsers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeUsers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeUsersInput
  },
  output: {
    shape: DescribeUsersOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
