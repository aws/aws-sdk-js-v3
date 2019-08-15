import { DescribeStepInput } from "../shapes/DescribeStepInput";
import { DescribeStepOutput } from "../shapes/DescribeStepOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeStep: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStep",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStepInput
  },
  output: {
    shape: DescribeStepOutput
  },
  errors: [
    {
      shape: InternalServerException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
