import { CreateMicrosoftADInput } from "./CreateMicrosoftADInput";
import { CreateMicrosoftADOutput } from "./CreateMicrosoftADOutput";
import { DirectoryLimitExceededException } from "./DirectoryLimitExceededException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
