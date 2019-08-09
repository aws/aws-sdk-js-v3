/**
 * <p>Object that determines whether tracking should be used during a contact
 *          executed with this <code>Config</code> in the mission profile.</p>
 */
export interface _TrackingConfig {
  /**
   * <p>Current setting for autotrack.</p>
   */
  autotrack: "PREFERRED" | "REMOVED" | "REQUIRED" | string;
}

export type _UnmarshalledTrackingConfig = _TrackingConfig;
