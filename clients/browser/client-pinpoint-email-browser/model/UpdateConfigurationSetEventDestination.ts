import { UpdateConfigurationSetEventDestinationInput } from "./UpdateConfigurationSetEventDestinationInput";
import { UpdateConfigurationSetEventDestinationOutput } from "./UpdateConfigurationSetEventDestinationOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateConfigurationSetEventDestination: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateConfigurationSetEventDestination",
  http: {
    method: "PUT",
    requestUri:
      "/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}"
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
    }
  ]
};
