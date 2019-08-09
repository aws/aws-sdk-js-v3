import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetPlanOutput shape
 */
export interface GetPlanOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A Python script to perform the mapping.</p>
   */
  PythonScript?: string;

  /**
   * <p>The Scala code to perform the mapping.</p>
   */
  ScalaCode?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
