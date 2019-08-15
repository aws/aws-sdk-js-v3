import { PutConfigurationSetTrackingOptionsInput } from "../shapes/PutConfigurationSetTrackingOptionsInput";
import { PutConfigurationSetTrackingOptionsOutput } from "../shapes/PutConfigurationSetTrackingOptionsOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutConfigurationSetTrackingOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutConfigurationSetTrackingOptions",
  http: {
    method: "PUT",
    requestUri:
      "/v1/email/configuration-sets/{ConfigurationSetName}/tracking-options"
  },
  input: {
    shape: PutConfigurationSetTrackingOptionsInput
  },
  output: {
    shape: PutConfigurationSetTrackingOptionsOutput
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
