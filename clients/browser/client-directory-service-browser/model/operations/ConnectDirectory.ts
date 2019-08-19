import { ConnectDirectoryInput } from "../shapes/ConnectDirectoryInput";
import { ConnectDirectoryOutput } from "../shapes/ConnectDirectoryOutput";
import { DirectoryLimitExceededException } from "../shapes/DirectoryLimitExceededException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
