import { StartConfigurationRecorderInput } from "./StartConfigurationRecorderInput";
import { StartConfigurationRecorderOutput } from "./StartConfigurationRecorderOutput";
import { NoSuchConfigurationRecorderException } from "./NoSuchConfigurationRecorderException";
import { NoAvailableDeliveryChannelException } from "./NoAvailableDeliveryChannelException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
