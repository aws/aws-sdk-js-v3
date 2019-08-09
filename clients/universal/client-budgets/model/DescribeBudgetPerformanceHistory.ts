import { DescribeBudgetPerformanceHistoryInput } from "./DescribeBudgetPerformanceHistoryInput";
import { DescribeBudgetPerformanceHistoryOutput } from "./DescribeBudgetPerformanceHistoryOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ExpiredNextTokenException } from "./ExpiredNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
