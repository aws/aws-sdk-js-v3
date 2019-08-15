import { DescribeBudgetsInput } from "../shapes/DescribeBudgetsInput";
import { DescribeBudgetsOutput } from "../shapes/DescribeBudgetsOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ExpiredNextTokenException } from "../shapes/ExpiredNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeBudgets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeBudgets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeBudgetsInput
  },
  output: {
    shape: DescribeBudgetsOutput
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
