import { DescribeLogGroupsInput } from "../shapes/DescribeLogGroupsInput";
import { DescribeLogGroupsOutput } from "../shapes/DescribeLogGroupsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeLogGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLogGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLogGroupsInput
  },
  output: {
    shape: DescribeLogGroupsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
