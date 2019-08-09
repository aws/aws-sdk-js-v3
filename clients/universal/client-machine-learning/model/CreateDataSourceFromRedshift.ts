import { CreateDataSourceFromRedshiftInput } from "./CreateDataSourceFromRedshiftInput";
import { CreateDataSourceFromRedshiftOutput } from "./CreateDataSourceFromRedshiftOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServerException } from "./InternalServerException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDataSourceFromRedshift: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDataSourceFromRedshift",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDataSourceFromRedshiftInput
  },
  output: {
    shape: CreateDataSourceFromRedshiftOutput
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
