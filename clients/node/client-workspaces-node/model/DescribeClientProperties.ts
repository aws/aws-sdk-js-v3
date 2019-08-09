import { DescribeClientPropertiesInput } from "./DescribeClientPropertiesInput";
import { DescribeClientPropertiesOutput } from "./DescribeClientPropertiesOutput";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
