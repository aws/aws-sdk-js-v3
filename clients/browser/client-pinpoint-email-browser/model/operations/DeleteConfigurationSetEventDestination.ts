import { DeleteConfigurationSetEventDestinationInput } from "../shapes/DeleteConfigurationSetEventDestinationInput";
import { DeleteConfigurationSetEventDestinationOutput } from "../shapes/DeleteConfigurationSetEventDestinationOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteConfigurationSetEventDestination: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteConfigurationSetEventDestination",
  http: {
    method: "DELETE",
    requestUri:
      "/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}"
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
    }
  ]
};
