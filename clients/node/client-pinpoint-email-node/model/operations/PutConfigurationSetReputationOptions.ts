import { PutConfigurationSetReputationOptionsInput } from "../shapes/PutConfigurationSetReputationOptionsInput";
import { PutConfigurationSetReputationOptionsOutput } from "../shapes/PutConfigurationSetReputationOptionsOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutConfigurationSetReputationOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutConfigurationSetReputationOptions",
  http: {
    method: "PUT",
    requestUri:
      "/v1/email/configuration-sets/{ConfigurationSetName}/reputation-options"
  },
  input: {
    shape: PutConfigurationSetReputationOptionsInput
  },
  output: {
    shape: PutConfigurationSetReputationOptionsOutput
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
