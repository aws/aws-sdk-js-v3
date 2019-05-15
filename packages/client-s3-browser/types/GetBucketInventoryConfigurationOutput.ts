import { _UnmarshalledInventoryConfiguration } from "./_InventoryConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBucketInventoryConfigurationOutput shape
 */
export interface GetBucketInventoryConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Specifies the inventory configuration.</p>
   */
  InventoryConfiguration?: _UnmarshalledInventoryConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
