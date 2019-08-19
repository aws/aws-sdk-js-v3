import { PutConfigurationSetSendingOptionsInput } from "../shapes/PutConfigurationSetSendingOptionsInput";
import { PutConfigurationSetSendingOptionsOutput } from "../shapes/PutConfigurationSetSendingOptionsOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutConfigurationSetSendingOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutConfigurationSetSendingOptions",
  http: {
    method: "PUT",
    requestUri: "/v1/email/configuration-sets/{ConfigurationSetName}/sending"
  },
  input: {
    shape: PutConfigurationSetSendingOptionsInput
  },
  output: {
    shape: PutConfigurationSetSendingOptionsOutput
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
