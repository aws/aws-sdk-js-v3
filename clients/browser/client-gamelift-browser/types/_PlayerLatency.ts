/**
 * <p>Regional latency information for a player, used when requesting a new game session with <a>StartGameSessionPlacement</a>. This value indicates the amount of time lag that exists when the player is connected to a fleet in the specified region. The relative difference between a player's latency values for multiple regions are used to determine which fleets are best suited to place a new game session for the player. </p>
 */
export interface _PlayerLatency {
  /**
   * <p>Unique identifier for a player associated with the latency data.</p>
   */
  PlayerId?: string;

  /**
   * <p>Name of the region that is associated with the latency value.</p>
   */
  RegionIdentifier?: string;

  /**
   * <p>Amount of time that represents the time lag experienced by the player when connected to the specified region.</p>
   */
  LatencyInMilliseconds?: number;
}

export type _UnmarshalledPlayerLatency = _PlayerLatency;
