import {
  _VolumeStatusAction,
  _UnmarshalledVolumeStatusAction
} from "./_VolumeStatusAction";
import {
  _VolumeStatusEvent,
  _UnmarshalledVolumeStatusEvent
} from "./_VolumeStatusEvent";
import {
  _VolumeStatusInfo,
  _UnmarshalledVolumeStatusInfo
} from "./_VolumeStatusInfo";

/**
 * <p>Describes the volume status.</p>
 */
export interface _VolumeStatusItem {
  /**
   * <p>The details of the operation.</p>
   */
  Actions?: Array<_VolumeStatusAction> | Iterable<_VolumeStatusAction>;

  /**
   * <p>The Availability Zone of the volume.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>A list of events associated with the volume.</p>
   */
  Events?: Array<_VolumeStatusEvent> | Iterable<_VolumeStatusEvent>;

  /**
   * <p>The volume ID.</p>
   */
  VolumeId?: string;

  /**
   * <p>The volume status.</p>
   */
  VolumeStatus?: _VolumeStatusInfo;
}

export interface _UnmarshalledVolumeStatusItem extends _VolumeStatusItem {
  /**
   * <p>The details of the operation.</p>
   */
  Actions?: Array<_UnmarshalledVolumeStatusAction>;

  /**
   * <p>A list of events associated with the volume.</p>
   */
  Events?: Array<_UnmarshalledVolumeStatusEvent>;

  /**
   * <p>The volume status.</p>
   */
  VolumeStatus?: _UnmarshalledVolumeStatusInfo;
}
