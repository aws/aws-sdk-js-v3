/**
 * <p>The summary of the fleet.</p>
 */
export interface _FleetSummary {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn?: string;

  /**
   * <p>The time when the fleet was created.</p>
   */
  CreatedTime?: Date | string | number;

  /**
   * <p>The time when the fleet was last updated.</p>
   */
  LastUpdatedTime?: Date | string | number;

  /**
   * <p>The name of the fleet.</p>
   */
  FleetName?: string;

  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The identifier used by users to sign into the Amazon WorkLink app.</p>
   */
  CompanyCode?: string;

  /**
   * <p>The status of the fleet.</p>
   */
  FleetStatus?:
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "DELETED"
    | "FAILED_TO_CREATE"
    | "FAILED_TO_DELETE"
    | string;
}

export interface _UnmarshalledFleetSummary extends _FleetSummary {
  /**
   * <p>The time when the fleet was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The time when the fleet was last updated.</p>
   */
  LastUpdatedTime?: Date;
}
