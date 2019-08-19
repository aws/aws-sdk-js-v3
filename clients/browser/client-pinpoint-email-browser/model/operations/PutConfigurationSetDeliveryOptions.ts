import { PutConfigurationSetDeliveryOptionsInput } from "../shapes/PutConfigurationSetDeliveryOptionsInput";
import { PutConfigurationSetDeliveryOptionsOutput } from "../shapes/PutConfigurationSetDeliveryOptionsOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutConfigurationSetDeliveryOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutConfigurationSetDeliveryOptions",
  http: {
    method: "PUT",
    requestUri:
      "/v1/email/configuration-sets/{ConfigurationSetName}/delivery-options"
  },
  input: {
    shape: PutConfigurationSetDeliveryOptionsInput
  },
  output: {
    shape: PutConfigurationSetDeliveryOptionsOutput
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
