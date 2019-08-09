import { CreateDirectoryInput } from "./CreateDirectoryInput";
import { CreateDirectoryOutput } from "./CreateDirectoryOutput";
import { DirectoryLimitExceededException } from "./DirectoryLimitExceededException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDirectory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDirectory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDirectoryInput
  },
  output: {
    shape: CreateDirectoryOutput
  },
  errors: [
    {
      shape: DirectoryLimitExceededException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
