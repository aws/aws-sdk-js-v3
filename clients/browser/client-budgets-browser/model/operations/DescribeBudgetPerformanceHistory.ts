import { DescribeBudgetPerformanceHistoryInput } from "../shapes/DescribeBudgetPerformanceHistoryInput";
import { DescribeBudgetPerformanceHistoryOutput } from "../shapes/DescribeBudgetPerformanceHistoryOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ExpiredNextTokenException } from "../shapes/ExpiredNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeBudgetPerformanceHistory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeBudgetPerformanceHistory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeBudgetPerformanceHistoryInput
  },
  output: {
    shape: DescribeBudgetPerformanceHistoryOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: ExpiredNextTokenException
    }
  ]
};
