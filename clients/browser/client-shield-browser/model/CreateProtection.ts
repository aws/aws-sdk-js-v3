import { CreateProtectionInput } from "./CreateProtectionInput";
import { CreateProtectionOutput } from "./CreateProtectionOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidResourceException } from "./InvalidResourceException";
import { InvalidOperationException } from "./InvalidOperationException";
import { LimitsExceededException } from "./LimitsExceededException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { OptimisticLockException } from "./OptimisticLockException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateProtection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateProtection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateProtectionInput
  },
  output: {
    shape: CreateProtectionOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: InvalidResourceException
    },
    {
      shape: InvalidOperationException
    },
    {
      shape: LimitsExceededException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: OptimisticLockException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
