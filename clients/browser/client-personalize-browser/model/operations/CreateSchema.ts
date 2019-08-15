import { CreateSchemaInput } from "../shapes/CreateSchemaInput";
import { CreateSchemaOutput } from "../shapes/CreateSchemaOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSchema: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSchema",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSchemaInput
  },
  output: {
    shape: CreateSchemaOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: LimitExceededException
    }
  ]
};
