import { _UnmarshalledBaseConfigurationItem } from "./_BaseConfigurationItem";
import { _UnmarshalledResourceKey } from "./_ResourceKey";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchGetResourceConfigOutput shape
 */
export interface BatchGetResourceConfigOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list that contains the current configuration of one or more resources.</p>
   */
  baseConfigurationItems?: Array<_UnmarshalledBaseConfigurationItem>;

  /**
   * <p>A list of resource keys that were not processed with the current response. The unprocessesResourceKeys value is in the same form as ResourceKeys, so the value can be directly provided to a subsequent BatchGetResourceConfig operation. If there are no unprocessed resource keys, the response contains an empty unprocessedResourceKeys list. </p>
   */
  unprocessedResourceKeys?: Array<_UnmarshalledResourceKey>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
