import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetIPSetOutput shape
 */
export interface GetIPSetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The user friendly name to identify the IPSet. This name is displayed in all findings that are triggered by activity that involves IP addresses included in this IPSet.</p>
   */
  Name: string;

  /**
   * <p>The format of the file that contains the IPSet.</p>
   */
  Format:
    | "TXT"
    | "STIX"
    | "OTX_CSV"
    | "ALIEN_VAULT"
    | "PROOF_POINT"
    | "FIRE_EYE"
    | string;

  /**
   * <p>The URI of the file that contains the IPSet. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key)</p>
   */
  Location: string;

  /**
   * <p>The status of ipSet file uploaded.</p>
   */
  Status:
    | "INACTIVE"
    | "ACTIVATING"
    | "ACTIVE"
    | "DEACTIVATING"
    | "ERROR"
    | "DELETE_PENDING"
    | "DELETED"
    | string;

  /**
   * <p>The tags of the IP set resource.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
