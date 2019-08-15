import { StartConfigurationRecorderInput } from "../shapes/StartConfigurationRecorderInput";
import { StartConfigurationRecorderOutput } from "../shapes/StartConfigurationRecorderOutput";
import { NoSuchConfigurationRecorderException } from "../shapes/NoSuchConfigurationRecorderException";
import { NoAvailableDeliveryChannelException } from "../shapes/NoAvailableDeliveryChannelException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartConfigurationRecorder: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartConfigurationRecorder",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartConfigurationRecorderInput
  },
  output: {
    shape: StartConfigurationRecorderOutput
  },
  errors: [
    {
      shape: NoSuchConfigurationRecorderException
    },
    {
      shape: NoAvailableDeliveryChannelException
    }
  ]
};
