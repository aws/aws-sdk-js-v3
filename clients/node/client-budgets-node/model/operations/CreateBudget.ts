import { CreateBudgetInput } from "../shapes/CreateBudgetInput";
import { CreateBudgetOutput } from "../shapes/CreateBudgetOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { CreationLimitExceededException } from "../shapes/CreationLimitExceededException";
import { DuplicateRecordException } from "../shapes/DuplicateRecordException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateBudget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateBudget",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateBudgetInput
  },
  output: {
    shape: CreateBudgetOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: CreationLimitExceededException
    },
    {
      shape: DuplicateRecordException
    }
  ]
};
