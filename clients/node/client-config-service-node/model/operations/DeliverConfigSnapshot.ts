import { DeliverConfigSnapshotInput } from "../shapes/DeliverConfigSnapshotInput";
import { DeliverConfigSnapshotOutput } from "../shapes/DeliverConfigSnapshotOutput";
import { NoSuchDeliveryChannelException } from "../shapes/NoSuchDeliveryChannelException";
import { NoAvailableConfigurationRecorderException } from "../shapes/NoAvailableConfigurationRecorderException";
import { NoRunningConfigurationRecorderException } from "../shapes/NoRunningConfigurationRecorderException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
