import { GetConfigurationSetEventDestinationsInput } from "./GetConfigurationSetEventDestinationsInput";
import { GetConfigurationSetEventDestinationsOutput } from "./GetConfigurationSetEventDestinationsOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetConfigurationSetEventDestinations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetConfigurationSetEventDestinations",
  http: {
    method: "GET",
    requestUri:
      "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations"
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
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
