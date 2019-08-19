import { CreateDataSourceFromRedshiftInput } from "../shapes/CreateDataSourceFromRedshiftInput";
import { CreateDataSourceFromRedshiftOutput } from "../shapes/CreateDataSourceFromRedshiftOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServerException } from "../shapes/InternalServerException";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
