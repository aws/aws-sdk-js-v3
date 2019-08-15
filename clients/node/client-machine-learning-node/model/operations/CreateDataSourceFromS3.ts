import { CreateDataSourceFromS3Input } from "../shapes/CreateDataSourceFromS3Input";
import { CreateDataSourceFromS3Output } from "../shapes/CreateDataSourceFromS3Output";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServerException } from "../shapes/InternalServerException";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDataSourceFromS3: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDataSourceFromS3",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDataSourceFromS3Input
  },
  output: {
    shape: CreateDataSourceFromS3Output
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
