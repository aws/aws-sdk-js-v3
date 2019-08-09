import { PutConfigurationSetTrackingOptionsInput } from "./PutConfigurationSetTrackingOptionsInput";
import { PutConfigurationSetTrackingOptionsOutput } from "./PutConfigurationSetTrackingOptionsOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
