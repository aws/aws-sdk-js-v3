import { CreateBackupInput } from "./CreateBackupInput";
import { CreateBackupOutput } from "./CreateBackupOutput";
import { InvalidStateException } from "./InvalidStateException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
