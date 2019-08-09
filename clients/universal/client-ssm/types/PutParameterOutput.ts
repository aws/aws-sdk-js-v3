import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutParameterOutput shape
 */
export interface PutParameterOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The new version number of a parameter. If you edit a parameter value, Parameter Store automatically creates a new version and assigns this new version a unique ID. You can reference a parameter version ID in API actions or in Systems Manager documents (SSM documents). By default, if you don't specify a specific version, the system returns the latest parameter value when a parameter is called.</p>
   */
  Version?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
