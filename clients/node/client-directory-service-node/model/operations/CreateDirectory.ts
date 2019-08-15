import { CreateDirectoryInput } from "../shapes/CreateDirectoryInput";
import { CreateDirectoryOutput } from "../shapes/CreateDirectoryOutput";
import { DirectoryLimitExceededException } from "../shapes/DirectoryLimitExceededException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
