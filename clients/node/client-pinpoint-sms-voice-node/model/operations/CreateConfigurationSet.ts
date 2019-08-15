import { CreateConfigurationSetInput } from "../shapes/CreateConfigurationSetInput";
import { CreateConfigurationSetOutput } from "../shapes/CreateConfigurationSetOutput";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateConfigurationSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateConfigurationSet",
  http: {
    method: "POST",
    requestUri: "/v1/sms-voice/configuration-sets"
  },
  input: {
    shape: CreateConfigurationSetInput
  },
  output: {
    shape: CreateConfigurationSetOutput
  },
  errors: [
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalServiceErrorException
    },
    {
      shape: AlreadyExistsException
    }
  ]
};
