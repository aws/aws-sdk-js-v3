import { DeliverConfigSnapshotInput } from "./DeliverConfigSnapshotInput";
import { DeliverConfigSnapshotOutput } from "./DeliverConfigSnapshotOutput";
import { NoSuchDeliveryChannelException } from "./NoSuchDeliveryChannelException";
import { NoAvailableConfigurationRecorderException } from "./NoAvailableConfigurationRecorderException";
import { NoRunningConfigurationRecorderException } from "./NoRunningConfigurationRecorderException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeliverConfigSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeliverConfigSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeliverConfigSnapshotInput
  },
  output: {
    shape: DeliverConfigSnapshotOutput
  },
  errors: [
    {
      shape: NoSuchDeliveryChannelException
    },
    {
      shape: NoAvailableConfigurationRecorderException
    },
    {
      shape: NoRunningConfigurationRecorderException
    }
  ]
};
