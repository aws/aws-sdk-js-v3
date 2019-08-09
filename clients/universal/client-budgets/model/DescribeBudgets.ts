import { DescribeBudgetsInput } from "./DescribeBudgetsInput";
import { DescribeBudgetsOutput } from "./DescribeBudgetsOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ExpiredNextTokenException } from "./ExpiredNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
