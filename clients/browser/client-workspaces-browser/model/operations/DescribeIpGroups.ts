import { DescribeIpGroupsInput } from "../shapes/DescribeIpGroupsInput";
import { DescribeIpGroupsOutput } from "../shapes/DescribeIpGroupsOutput";
import { InvalidParameterValuesException } from "../shapes/InvalidParameterValuesException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeIpGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeIpGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeIpGroupsInput
  },
  output: {
    shape: DescribeIpGroupsOutput
  },
  errors: [
    {
      shape: InvalidParameterValuesException
    },
    {
      shape: AccessDeniedException
    }
  ]
};
