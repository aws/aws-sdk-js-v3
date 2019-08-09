import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDetectorOutput shape
 */
export interface GetDetectorOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Detector creation timestamp.</p>
   */
  CreatedAt?: string;

  /**
   * <p>Finding publishing frequency.</p>
   */
  FindingPublishingFrequency?:
    | "FIFTEEN_MINUTES"
    | "ONE_HOUR"
    | "SIX_HOURS"
    | string;

  /**
   * <p>The GuardDuty service role.</p>
   */
  ServiceRole: string;

  /**
   * <p>The detector status.</p>
   */
  Status: "ENABLED" | "DISABLED" | string;

  /**
   * <p>Detector last update timestamp.</p>
   */
  UpdatedAt?: string;

  /**
   * <p>The tags of the detector resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
