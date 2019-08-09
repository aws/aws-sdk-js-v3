import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RegisterThingOutput shape
 */
export interface RegisterThingOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>.</p>
   */
  certificatePem?: string;

  /**
   * <p>ARNs for the generated resources.</p>
   */
  resourceArns?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
