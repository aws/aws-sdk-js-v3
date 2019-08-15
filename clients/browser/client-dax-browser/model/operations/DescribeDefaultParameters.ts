import { DescribeDefaultParametersInput } from "../shapes/DescribeDefaultParametersInput";
import { DescribeDefaultParametersOutput } from "../shapes/DescribeDefaultParametersOutput";
import { ServiceLinkedRoleNotFoundFault } from "../shapes/ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDefaultParameters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDefaultParameters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDefaultParametersInput
  },
  output: {
    shape: DescribeDefaultParametersOutput
  },
  errors: [
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
