/**
 * <p>Describes a modification to the configuration of bring your own license (BYOL) for the specified account. </p>
 */
export interface _AccountModification {
  /**
   * <p>The state of the modification to the configuration of BYOL.</p>
   */
  ModificationState?: "PENDING" | "COMPLETED" | "FAILED" | string;

  /**
   * <p>The status of BYOL (whether BYOL is being enabled or disabled).</p>
   */
  DedicatedTenancySupport?: "ENABLED" | "DISABLED" | string;

  /**
   * <p>The IP address range, specified as an IPv4 CIDR block, for the management network interface used for the account.</p>
   */
  DedicatedTenancyManagementCidrRange?: string;

  /**
   * <p>The timestamp when the modification of the BYOL configuration was started.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The error code that is returned if the configuration of BYOL cannot be modified.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned if the configuration of BYOL cannot be modified.</p>
   */
  ErrorMessage?: string;
}

export interface _UnmarshalledAccountModification extends _AccountModification {
  /**
   * <p>The timestamp when the modification of the BYOL configuration was started.</p>
   */
  StartTime?: Date;
}
