import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartSchemaCreationOutput shape
 */
export interface StartSchemaCreationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current state of the schema (PROCESSING, FAILED, SUCCESS, or NOT_APPLICABLE). When the schema is in the ACTIVE state, you can add data.</p>
   */
  status?:
    | "PROCESSING"
    | "ACTIVE"
    | "DELETING"
    | "FAILED"
    | "SUCCESS"
    | "NOT_APPLICABLE"
    | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
