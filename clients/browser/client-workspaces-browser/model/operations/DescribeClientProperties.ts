import { DescribeClientPropertiesInput } from "../shapes/DescribeClientPropertiesInput";
import { DescribeClientPropertiesOutput } from "../shapes/DescribeClientPropertiesOutput";
import { InvalidParameterValuesException } from "../shapes/InvalidParameterValuesException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeClientProperties: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeClientProperties",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeClientPropertiesInput
  },
  output: {
    shape: DescribeClientPropertiesOutput
  },
  errors: [
    {
      shape: InvalidParameterValuesException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: AccessDeniedException
    }
  ]
};
