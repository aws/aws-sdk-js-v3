import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateCustomKeyStoreOutput shape
 */
export interface CreateCustomKeyStoreOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A unique identifier for the new custom key store.</p>
   */
  CustomKeyStoreId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
