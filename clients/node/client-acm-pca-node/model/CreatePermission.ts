import { CreatePermissionInput } from "./CreatePermissionInput";
import { CreatePermissionOutput } from "./CreatePermissionOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { PermissionAlreadyExistsException } from "./PermissionAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidStateException } from "./InvalidStateException";
import { RequestFailedException } from "./RequestFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreatePermission: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePermission",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePermissionInput
  },
  output: {
    shape: CreatePermissionOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: PermissionAlreadyExistsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidStateException
    },
    {
      shape: RequestFailedException
    }
  ]
};
