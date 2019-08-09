import { CreateBudgetInput } from "./CreateBudgetInput";
import { CreateBudgetOutput } from "./CreateBudgetOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { CreationLimitExceededException } from "./CreationLimitExceededException";
import { DuplicateRecordException } from "./DuplicateRecordException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
