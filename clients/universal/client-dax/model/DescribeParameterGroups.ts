import { DescribeParameterGroupsInput } from "./DescribeParameterGroupsInput";
import { DescribeParameterGroupsOutput } from "./DescribeParameterGroupsOutput";
import { ParameterGroupNotFoundFault } from "./ParameterGroupNotFoundFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
