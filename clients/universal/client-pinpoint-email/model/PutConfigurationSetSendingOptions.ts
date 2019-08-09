import { PutConfigurationSetSendingOptionsInput } from "./PutConfigurationSetSendingOptionsInput";
import { PutConfigurationSetSendingOptionsOutput } from "./PutConfigurationSetSendingOptionsOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
