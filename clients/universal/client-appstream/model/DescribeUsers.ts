import { DescribeUsersInput } from "./DescribeUsersInput";
import { DescribeUsersOutput } from "./DescribeUsersOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
