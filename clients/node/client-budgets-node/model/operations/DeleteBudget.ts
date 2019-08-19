import { DeleteBudgetInput } from "../shapes/DeleteBudgetInput";
import { DeleteBudgetOutput } from "../shapes/DeleteBudgetOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBudget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBudget",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteBudgetInput
  },
  output: {
    shape: DeleteBudgetOutput
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
