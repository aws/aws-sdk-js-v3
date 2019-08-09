import { DeleteConfigurationSetEventDestinationInput } from "./DeleteConfigurationSetEventDestinationInput";
import { DeleteConfigurationSetEventDestinationOutput } from "./DeleteConfigurationSetEventDestinationOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteConfigurationSetEventDestination: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteConfigurationSetEventDestination",
  http: {
    method: "DELETE",
    requestUri:
      "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}"
  },
  input: {
    shape: DeleteConfigurationSetEventDestinationInput
  },
  output: {
    shape: DeleteConfigurationSetEventDestinationOutput
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
