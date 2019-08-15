import { DescribePortfolioInput } from "../shapes/DescribePortfolioInput";
import { DescribePortfolioOutput } from "../shapes/DescribePortfolioOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribePortfolio: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePortfolio",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribePortfolioInput
  },
  output: {
    shape: DescribePortfolioOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
