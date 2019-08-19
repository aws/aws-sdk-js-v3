/**
 * <p>Describes an Availability Zone.</p>
 */
export interface _AvailabilityZone {
  /**
   * <p>The name of the Availability Zone. The format is <code>us-east-2a</code> (case-sensitive).</p>
   */
  zoneName?: string;

  /**
   * <p>The state of the Availability Zone.</p>
   */
  state?: string;
}

export type _UnmarshalledAvailabilityZone = _AvailabilityZone;
