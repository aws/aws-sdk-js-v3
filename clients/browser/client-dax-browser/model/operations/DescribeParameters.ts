import { DescribeParametersInput } from "../shapes/DescribeParametersInput";
import { DescribeParametersOutput } from "../shapes/DescribeParametersOutput";
import { ParameterGroupNotFoundFault } from "../shapes/ParameterGroupNotFoundFault";
import { ServiceLinkedRoleNotFoundFault } from "../shapes/ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeParameters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeParameters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeParametersInput
  },
  output: {
    shape: DescribeParametersOutput
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
