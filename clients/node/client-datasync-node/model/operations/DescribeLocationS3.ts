import { DescribeLocationS3Input } from "../shapes/DescribeLocationS3Input";
import { DescribeLocationS3Output } from "../shapes/DescribeLocationS3Output";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeLocationS3: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLocationS3",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLocationS3Input
  },
  output: {
    shape: DescribeLocationS3Output
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalException
    }
  ]
};
