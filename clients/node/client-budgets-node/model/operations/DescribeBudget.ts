import { DescribeBudgetInput } from "../shapes/DescribeBudgetInput";
import { DescribeBudgetOutput } from "../shapes/DescribeBudgetOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeBudget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeBudget",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeBudgetInput
  },
  output: {
    shape: DescribeBudgetOutput
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
    }
  ]
};
