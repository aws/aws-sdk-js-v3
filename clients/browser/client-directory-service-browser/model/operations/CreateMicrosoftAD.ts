import { CreateMicrosoftADInput } from "../shapes/CreateMicrosoftADInput";
import { CreateMicrosoftADOutput } from "../shapes/CreateMicrosoftADOutput";
import { DirectoryLimitExceededException } from "../shapes/DirectoryLimitExceededException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateMicrosoftAD: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateMicrosoftAD",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateMicrosoftADInput
  },
  output: {
    shape: CreateMicrosoftADOutput
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
    },
    {
      shape: UnsupportedOperationException
    }
  ]
};
