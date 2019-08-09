import { ListManagedSchemaArnsInput } from "./ListManagedSchemaArnsInput";
import { ListManagedSchemaArnsOutput } from "./ListManagedSchemaArnsOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { ValidationException } from "./ValidationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListManagedSchemaArns: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListManagedSchemaArns",
  http: {
    method: "POST",
    requestUri: "/amazonclouddirectory/2017-01-11/schema/managed"
  },
  input: {
    shape: ListManagedSchemaArnsInput
  },
  output: {
    shape: ListManagedSchemaArnsOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: ValidationException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
