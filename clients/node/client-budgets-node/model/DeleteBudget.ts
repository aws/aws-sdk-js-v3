import { DeleteBudgetInput } from "./DeleteBudgetInput";
import { DeleteBudgetOutput } from "./DeleteBudgetOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
