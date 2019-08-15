import { CreateTableInput } from "../shapes/CreateTableInput";
import { CreateTableOutput } from "../shapes/CreateTableOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateTable: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTable",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTableInput
  },
  output: {
    shape: CreateTableOutput
  },
  errors: [
    {
      shape: ResourceInUseException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalServerError
    }
  ]
};
