import { CreateConfigurationSetEventDestinationInput } from "./CreateConfigurationSetEventDestinationInput";
import { CreateConfigurationSetEventDestinationOutput } from "./CreateConfigurationSetEventDestinationOutput";
import { NotFoundException } from "./NotFoundException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateConfigurationSetEventDestination: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateConfigurationSetEventDestination",
  http: {
    method: "POST",
    requestUri:
      "/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations"
  },
  input: {
    shape: CreateConfigurationSetEventDestinationInput
  },
  output: {
    shape: CreateConfigurationSetEventDestinationOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: AlreadyExistsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    }
  ]
};
