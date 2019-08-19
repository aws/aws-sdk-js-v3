import { UpdateBudgetInput } from "../shapes/UpdateBudgetInput";
import { UpdateBudgetOutput } from "../shapes/UpdateBudgetOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateBudget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateBudget",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateBudgetInput
  },
  output: {
    shape: UpdateBudgetOutput
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
