import { DescribeParameterGroupsInput } from "../shapes/DescribeParameterGroupsInput";
import { DescribeParameterGroupsOutput } from "../shapes/DescribeParameterGroupsOutput";
import { ParameterGroupNotFoundFault } from "../shapes/ParameterGroupNotFoundFault";
import { ServiceLinkedRoleNotFoundFault } from "../shapes/ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeParameterGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeParameterGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeParameterGroupsInput
  },
  output: {
    shape: DescribeParameterGroupsOutput
  },
  errors: [
    {
      shape: ParameterGroupNotFoundFault
    },
    {
      shape: ServiceLinkedRoleNotFoundFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
