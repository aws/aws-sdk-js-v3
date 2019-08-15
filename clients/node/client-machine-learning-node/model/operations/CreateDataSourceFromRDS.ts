import { CreateDataSourceFromRDSInput } from "../shapes/CreateDataSourceFromRDSInput";
import { CreateDataSourceFromRDSOutput } from "../shapes/CreateDataSourceFromRDSOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServerException } from "../shapes/InternalServerException";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
