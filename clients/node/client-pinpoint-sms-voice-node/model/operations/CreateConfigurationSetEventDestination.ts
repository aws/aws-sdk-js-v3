import { CreateConfigurationSetEventDestinationInput } from "../shapes/CreateConfigurationSetEventDestinationInput";
import { CreateConfigurationSetEventDestinationOutput } from "../shapes/CreateConfigurationSetEventDestinationOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
