import { _OptionStatus, _UnmarshalledOptionStatus } from "./_OptionStatus";

/**
 * <p>The status and configuration of the domain's availability options.</p>
 */
export interface _AvailabilityOptionsStatus {
  /**
   * <p>The availability options configured for the domain.</p>
   */
  Options: boolean;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: _OptionStatus;
}

export interface _UnmarshalledAvailabilityOptionsStatus
  extends _AvailabilityOptionsStatus {
  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: _UnmarshalledOptionStatus;
}
