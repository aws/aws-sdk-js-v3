import {
  _DeleteFleetError,
  _UnmarshalledDeleteFleetError
} from "./_DeleteFleetError";

/**
 * <p>Describes an EC2 Fleet that was not successfully deleted.</p>
 */
export interface _DeleteFleetErrorItem {
  /**
   * <p>The error.</p>
   */
  Error?: _DeleteFleetError;

  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;
}

export interface _UnmarshalledDeleteFleetErrorItem
  extends _DeleteFleetErrorItem {
  /**
   * <p>The error.</p>
   */
  Error?: _UnmarshalledDeleteFleetError;
}
