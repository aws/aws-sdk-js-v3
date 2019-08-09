import { DescribeBudgetInput } from "./DescribeBudgetInput";
import { DescribeBudgetOutput } from "./DescribeBudgetOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
