import { DescribePortfolioShareStatusInput } from "../shapes/DescribePortfolioShareStatusInput";
import { DescribePortfolioShareStatusOutput } from "../shapes/DescribePortfolioShareStatusOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationNotSupportedException } from "../shapes/OperationNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribePortfolioShareStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePortfolioShareStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribePortfolioShareStatusInput
  },
  output: {
    shape: DescribePortfolioShareStatusOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParametersException
    },
    {
      shape: OperationNotSupportedException
    }
  ]
};
