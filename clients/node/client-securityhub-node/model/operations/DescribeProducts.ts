import { DescribeProductsInput } from "../shapes/DescribeProductsInput";
import { DescribeProductsOutput } from "../shapes/DescribeProductsOutput";
import { InternalException } from "../shapes/InternalException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeProducts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeProducts",
  http: {
    method: "GET",
    requestUri: "/products"
  },
  input: {
    shape: DescribeProductsInput
  },
  output: {
    shape: DescribeProductsOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidAccessException
    },
    {
      shape: InvalidInputException
    }
  ]
};
