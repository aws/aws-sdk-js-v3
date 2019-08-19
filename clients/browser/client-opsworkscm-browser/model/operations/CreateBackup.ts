import { CreateBackupInput } from "../shapes/CreateBackupInput";
import { CreateBackupOutput } from "../shapes/CreateBackupOutput";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateBackup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateBackup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateBackupInput
  },
  output: {
    shape: CreateBackupOutput
  },
  errors: [
    {
      shape: InvalidStateException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ValidationException
    }
  ]
};
