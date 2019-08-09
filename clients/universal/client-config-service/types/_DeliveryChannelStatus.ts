import {
  _ConfigExportDeliveryInfo,
  _UnmarshalledConfigExportDeliveryInfo
} from "./_ConfigExportDeliveryInfo";
import {
  _ConfigStreamDeliveryInfo,
  _UnmarshalledConfigStreamDeliveryInfo
} from "./_ConfigStreamDeliveryInfo";

/**
 * <p>The status of a specified delivery channel.</p> <p>Valid values: <code>Success</code> | <code>Failure</code> </p>
 */
export interface _DeliveryChannelStatus {
  /**
   * <p>The name of the delivery channel.</p>
   */
  name?: string;

  /**
   * <p>A list containing the status of the delivery of the snapshot to the specified Amazon S3 bucket.</p>
   */
  configSnapshotDeliveryInfo?: _ConfigExportDeliveryInfo;

  /**
   * <p>A list that contains the status of the delivery of the configuration history to the specified Amazon S3 bucket.</p>
   */
  configHistoryDeliveryInfo?: _ConfigExportDeliveryInfo;

  /**
   * <p>A list containing the status of the delivery of the configuration stream notification to the specified Amazon SNS topic.</p>
   */
  configStreamDeliveryInfo?: _ConfigStreamDeliveryInfo;
}

export interface _UnmarshalledDeliveryChannelStatus
  extends _DeliveryChannelStatus {
  /**
   * <p>A list containing the status of the delivery of the snapshot to the specified Amazon S3 bucket.</p>
   */
  configSnapshotDeliveryInfo?: _UnmarshalledConfigExportDeliveryInfo;

  /**
   * <p>A list that contains the status of the delivery of the configuration history to the specified Amazon S3 bucket.</p>
   */
  configHistoryDeliveryInfo?: _UnmarshalledConfigExportDeliveryInfo;

  /**
   * <p>A list containing the status of the delivery of the configuration stream notification to the specified Amazon SNS topic.</p>
   */
  configStreamDeliveryInfo?: _UnmarshalledConfigStreamDeliveryInfo;
}
