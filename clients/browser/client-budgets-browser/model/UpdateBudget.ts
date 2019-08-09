import { UpdateBudgetInput } from "./UpdateBudgetInput";
import { UpdateBudgetOutput } from "./UpdateBudgetOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
