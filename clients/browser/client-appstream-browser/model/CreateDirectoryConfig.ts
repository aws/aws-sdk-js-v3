import { CreateDirectoryConfigInput } from "./CreateDirectoryConfigInput";
import { CreateDirectoryConfigOutput } from "./CreateDirectoryConfigOutput";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDirectoryConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDirectoryConfig",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDirectoryConfigInput
  },
  output: {
    shape: CreateDirectoryConfigOutput
  },
  errors: [
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidAccountStatusException
    }
  ]
};
