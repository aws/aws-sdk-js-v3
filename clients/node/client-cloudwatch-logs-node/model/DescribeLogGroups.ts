import { DescribeLogGroupsInput } from "./DescribeLogGroupsInput";
import { DescribeLogGroupsOutput } from "./DescribeLogGroupsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
