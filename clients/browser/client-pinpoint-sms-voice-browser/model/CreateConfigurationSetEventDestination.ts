import { CreateConfigurationSetEventDestinationInput } from "./CreateConfigurationSetEventDestinationInput";
import { CreateConfigurationSetEventDestinationOutput } from "./CreateConfigurationSetEventDestinationOutput";
import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateConfigurationSetEventDestination: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateConfigurationSetEventDestination",
  http: {
    method: "POST",
    requestUri:
      "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations"
  },
  input: {
    shape: CreateConfigurationSetEventDestinationInput
  },
  output: {
    shape: CreateConfigurationSetEventDestinationOutput
  },
  errors: [
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
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: AlreadyExistsException
    }
  ]
};
