import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface GetSatelliteOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>When a satellite was created.</p>
   */
  dateCreated?: Date;

  /**
   * <p>When a satellite was last updated.</p>
   */
  lastUpdated?: Date;

  /**
   * <p>NORAD satellite ID number.</p>
   */
  noradSatelliteID?: number;

  /**
   * <p>ARN of a satellite.</p>
   */
  satelliteArn?: string;

  /**
   * <p>UUID of a satellite.</p>
   */
  satelliteId?: string;

  /**
   * <p>Tags assigned to a satellite.</p>
   */
  tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
