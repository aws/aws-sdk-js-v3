import { ConnectDirectoryInput } from "./ConnectDirectoryInput";
import { ConnectDirectoryOutput } from "./ConnectDirectoryOutput";
import { DirectoryLimitExceededException } from "./DirectoryLimitExceededException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ConnectDirectory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ConnectDirectory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ConnectDirectoryInput
  },
  output: {
    shape: ConnectDirectoryOutput
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
