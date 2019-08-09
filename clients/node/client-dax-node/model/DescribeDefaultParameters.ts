import { DescribeDefaultParametersInput } from "./DescribeDefaultParametersInput";
import { DescribeDefaultParametersOutput } from "./DescribeDefaultParametersOutput";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
