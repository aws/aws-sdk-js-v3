import {
  _SecurityProfileIdentifier,
  _UnmarshalledSecurityProfileIdentifier
} from "./_SecurityProfileIdentifier";
import {
  _SecurityProfileTarget,
  _UnmarshalledSecurityProfileTarget
} from "./_SecurityProfileTarget";

/**
 * <p>Information about a security profile and the target associated with it.</p>
 */
export interface _SecurityProfileTargetMapping {
  /**
   * <p>Information that identifies the security profile.</p>
   */
  securityProfileIdentifier?: _SecurityProfileIdentifier;

  /**
   * <p>Information about the target (thing group) associated with the security profile.</p>
   */
  target?: _SecurityProfileTarget;
}

export interface _UnmarshalledSecurityProfileTargetMapping
  extends _SecurityProfileTargetMapping {
  /**
   * <p>Information that identifies the security profile.</p>
   */
  securityProfileIdentifier?: _UnmarshalledSecurityProfileIdentifier;

  /**
   * <p>Information about the target (thing group) associated with the security profile.</p>
   */
  target?: _UnmarshalledSecurityProfileTarget;
}
