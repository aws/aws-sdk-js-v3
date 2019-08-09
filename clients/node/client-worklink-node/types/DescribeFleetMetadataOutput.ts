import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeFleetMetadataOutput shape
 */
export interface DescribeFleetMetadataOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The time that the fleet was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The time that the fleet was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The name of the fleet.</p>
   */
  FleetName?: string;

  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region.</p>
   */
  OptimizeForEndUserLocation?: boolean;

  /**
   * <p>The identifier used by users to sign in to the Amazon WorkLink app.</p>
   */
  CompanyCode?: string;

  /**
   * <p>The current state of the fleet.</p>
   */
  FleetStatus?:
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "DELETED"
    | "FAILED_TO_CREATE"
    | "FAILED_TO_DELETE"
    | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
