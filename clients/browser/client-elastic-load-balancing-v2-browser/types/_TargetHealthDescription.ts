import {
  _TargetDescription,
  _UnmarshalledTargetDescription
} from "./_TargetDescription";
import { _TargetHealth, _UnmarshalledTargetHealth } from "./_TargetHealth";

/**
 * <p>Information about the health of a target.</p>
 */
export interface _TargetHealthDescription {
  /**
   * <p>The description of the target.</p>
   */
  Target?: _TargetDescription;

  /**
   * <p>The port to use to connect with the target.</p>
   */
  HealthCheckPort?: string;

  /**
   * <p>The health information for the target.</p>
   */
  TargetHealth?: _TargetHealth;
}

export interface _UnmarshalledTargetHealthDescription
  extends _TargetHealthDescription {
  /**
   * <p>The description of the target.</p>
   */
  Target?: _UnmarshalledTargetDescription;

  /**
   * <p>The health information for the target.</p>
   */
  TargetHealth?: _UnmarshalledTargetHealth;
}
