import { CreateConfigurationSetInput } from "./CreateConfigurationSetInput";
import { CreateConfigurationSetOutput } from "./CreateConfigurationSetOutput";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
