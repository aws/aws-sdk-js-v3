import { _UnmarshalledBaseConfigurationItem } from "./_BaseConfigurationItem";
import { _UnmarshalledAggregateResourceIdentifier } from "./_AggregateResourceIdentifier";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchGetAggregateResourceConfigOutput shape
 */
export interface BatchGetAggregateResourceConfigOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list that contains the current configuration of one or more resources.</p>
   */
  BaseConfigurationItems?: Array<_UnmarshalledBaseConfigurationItem>;

  /**
   * <p>A list of resource identifiers that were not processed with current scope. The list is empty if all the resources are processed.</p>
   */
  UnprocessedResourceIdentifiers?: Array<
    _UnmarshalledAggregateResourceIdentifier
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
