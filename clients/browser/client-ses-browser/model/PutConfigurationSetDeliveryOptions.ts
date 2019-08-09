import { PutConfigurationSetDeliveryOptionsInput } from "./PutConfigurationSetDeliveryOptionsInput";
import { PutConfigurationSetDeliveryOptionsOutput } from "./PutConfigurationSetDeliveryOptionsOutput";
import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { InvalidDeliveryOptionsException } from "./InvalidDeliveryOptionsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutConfigurationSetDeliveryOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutConfigurationSetDeliveryOptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutConfigurationSetDeliveryOptionsInput
  },
  output: {
    shape: PutConfigurationSetDeliveryOptionsOutput,
    resultWrapper: "PutConfigurationSetDeliveryOptionsResult"
  },
  errors: [
    {
      shape: ConfigurationSetDoesNotExistException
    },
    {
      shape: InvalidDeliveryOptionsException
    }
  ]
};
