import { CreateSchemaInput } from "./CreateSchemaInput";
import { CreateSchemaOutput } from "./CreateSchemaOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
