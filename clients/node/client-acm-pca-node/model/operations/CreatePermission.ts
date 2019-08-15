import { CreatePermissionInput } from "../shapes/CreatePermissionInput";
import { CreatePermissionOutput } from "../shapes/CreatePermissionOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { PermissionAlreadyExistsException } from "../shapes/PermissionAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { RequestFailedException } from "../shapes/RequestFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
