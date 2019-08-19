import { DescribeSchemaInput } from "../shapes/DescribeSchemaInput";
import { DescribeSchemaOutput } from "../shapes/DescribeSchemaOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSchema: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSchema",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSchemaInput
  },
  output: {
    shape: DescribeSchemaOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
