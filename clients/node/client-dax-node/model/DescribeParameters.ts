import { DescribeParametersInput } from "./DescribeParametersInput";
import { DescribeParametersOutput } from "./DescribeParametersOutput";
import { ParameterGroupNotFoundFault } from "./ParameterGroupNotFoundFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
