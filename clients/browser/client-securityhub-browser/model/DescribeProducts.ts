import { DescribeProductsInput } from "./DescribeProductsInput";
import { DescribeProductsOutput } from "./DescribeProductsOutput";
import { InternalException } from "./InternalException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccessException } from "./InvalidAccessException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
