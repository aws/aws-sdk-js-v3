import { DescribePortfolioShareStatusInput } from "./DescribePortfolioShareStatusInput";
import { DescribePortfolioShareStatusOutput } from "./DescribePortfolioShareStatusOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
