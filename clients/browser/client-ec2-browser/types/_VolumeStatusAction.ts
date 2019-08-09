/**
 * <p>Describes a volume status operation code.</p>
 */
export interface _VolumeStatusAction {
  /**
   * <p>The code identifying the operation, for example, <code>enable-volume-io</code>.</p>
   */
  Code?: string;

  /**
   * <p>A description of the operation.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the event associated with this operation.</p>
   */
  EventId?: string;

  /**
   * <p>The event type associated with this operation.</p>
   */
  EventType?: string;
}

export type _UnmarshalledVolumeStatusAction = _VolumeStatusAction;
