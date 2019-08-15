import { UpdateConfigurationSetEventDestinationInput } from "../shapes/UpdateConfigurationSetEventDestinationInput";
import { UpdateConfigurationSetEventDestinationOutput } from "../shapes/UpdateConfigurationSetEventDestinationOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateConfigurationSetEventDestination: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateConfigurationSetEventDestination",
  http: {
    method: "PUT",
    requestUri:
      "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}"
  },
  input: {
    shape: UpdateConfigurationSetEventDestinationInput
  },
  output: {
    shape: UpdateConfigurationSetEventDestinationOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
