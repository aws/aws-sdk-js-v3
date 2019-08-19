import { ListConfigurationSetsInput } from "../shapes/ListConfigurationSetsInput";
import { ListConfigurationSetsOutput } from "../shapes/ListConfigurationSetsOutput";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListConfigurationSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListConfigurationSets",
  http: {
    method: "GET",
    requestUri: "/v1/sms-voice/configuration-sets"
  },
  input: {
    shape: ListConfigurationSetsInput
  },
  output: {
    shape: ListConfigurationSetsOutput
  },
  errors: [
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
