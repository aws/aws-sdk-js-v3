import { DescribeSchemaInput } from "./DescribeSchemaInput";
import { DescribeSchemaOutput } from "./DescribeSchemaOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
