import { PutConfigurationSetDeliveryOptionsInput } from "./PutConfigurationSetDeliveryOptionsInput";
import { PutConfigurationSetDeliveryOptionsOutput } from "./PutConfigurationSetDeliveryOptionsOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
