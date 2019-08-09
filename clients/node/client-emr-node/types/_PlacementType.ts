/**
 * <p>The Amazon EC2 Availability Zone configuration of the cluster (job flow).</p>
 */
export interface _PlacementType {
  /**
   * <p>The Amazon EC2 Availability Zone for the cluster. <code>AvailabilityZone</code> is used for uniform instance groups, while <code>AvailabilityZones</code> (plural) is used for instance fleets.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>When multiple Availability Zones are specified, Amazon EMR evaluates them and launches instances in the optimal Availability Zone. <code>AvailabilityZones</code> is used for instance fleets, while <code>AvailabilityZone</code> (singular) is used for uniform instance groups.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
   */
  AvailabilityZones?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledPlacementType extends _PlacementType {
  /**
   * <p>When multiple Availability Zones are specified, Amazon EMR evaluates them and launches instances in the optimal Availability Zone. <code>AvailabilityZones</code> is used for instance fleets, while <code>AvailabilityZone</code> (singular) is used for uniform instance groups.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
   */
  AvailabilityZones?: Array<string>;
}
