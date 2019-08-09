import { DescribeResourceGroupsInput } from "./DescribeResourceGroupsInput";
import { DescribeResourceGroupsOutput } from "./DescribeResourceGroupsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeResourceGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeResourceGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeResourceGroupsInput
  },
  output: {
    shape: DescribeResourceGroupsOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    }
  ]
};
