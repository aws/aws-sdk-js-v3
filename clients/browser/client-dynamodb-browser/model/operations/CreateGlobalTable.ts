import { CreateGlobalTableInput } from "../shapes/CreateGlobalTableInput";
import { CreateGlobalTableOutput } from "../shapes/CreateGlobalTableOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServerError } from "../shapes/InternalServerError";
import { GlobalTableAlreadyExistsException } from "../shapes/GlobalTableAlreadyExistsException";
import { TableNotFoundException } from "../shapes/TableNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateGlobalTable: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateGlobalTable",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateGlobalTableInput
  },
  output: {
    shape: CreateGlobalTableOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: InternalServerError
    },
    {
      shape: GlobalTableAlreadyExistsException
    },
    {
      shape: TableNotFoundException
    }
  ]
};
