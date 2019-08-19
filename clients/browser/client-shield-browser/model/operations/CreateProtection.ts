import { CreateProtectionInput } from "../shapes/CreateProtectionInput";
import { CreateProtectionOutput } from "../shapes/CreateProtectionOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidResourceException } from "../shapes/InvalidResourceException";
import { InvalidOperationException } from "../shapes/InvalidOperationException";
import { LimitsExceededException } from "../shapes/LimitsExceededException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { OptimisticLockException } from "../shapes/OptimisticLockException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
