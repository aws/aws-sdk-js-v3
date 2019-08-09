import { NoSuchDeliveryChannelException } from "./NoSuchDeliveryChannelException";
import { NoAvailableConfigurationRecorderException } from "./NoAvailableConfigurationRecorderException";
import { NoRunningConfigurationRecorderException } from "./NoRunningConfigurationRecorderException";
export type DeliverConfigSnapshotExceptionsUnion =
  | NoSuchDeliveryChannelException
  | NoAvailableConfigurationRecorderException
  | NoRunningConfigurationRecorderException;
