import { CreateDataSourceFromRDSInput } from "./CreateDataSourceFromRDSInput";
import { CreateDataSourceFromRDSOutput } from "./CreateDataSourceFromRDSOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServerException } from "./InternalServerException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDataSourceFromRDS: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDataSourceFromRDS",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDataSourceFromRDSInput
  },
  output: {
    shape: CreateDataSourceFromRDSOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServerException
    },
    {
      shape: IdempotentParameterMismatchException
    }
  ]
};
