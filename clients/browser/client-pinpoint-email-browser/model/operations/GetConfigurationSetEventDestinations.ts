import { GetConfigurationSetEventDestinationsInput } from "../shapes/GetConfigurationSetEventDestinationsInput";
import { GetConfigurationSetEventDestinationsOutput } from "../shapes/GetConfigurationSetEventDestinationsOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetConfigurationSetEventDestinations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetConfigurationSetEventDestinations",
  http: {
    method: "GET",
    requestUri:
      "/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations"
  },
  input: {
    shape: GetConfigurationSetEventDestinationsInput
  },
  output: {
    shape: GetConfigurationSetEventDestinationsOutput
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
