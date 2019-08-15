import { ListManagedSchemaArnsInput } from "../shapes/ListManagedSchemaArnsInput";
import { ListManagedSchemaArnsOutput } from "../shapes/ListManagedSchemaArnsOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { ValidationException } from "../shapes/ValidationException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
