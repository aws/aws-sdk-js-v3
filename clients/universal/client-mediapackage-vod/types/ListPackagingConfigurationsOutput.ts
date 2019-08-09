import { _UnmarshalledPackagingConfiguration } from "./_PackagingConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPackagingConfigurationsOutput shape
 */
export interface ListPackagingConfigurationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * A token that can be used to resume pagination from the end of the collection.
   */
  NextToken?: string;

  /**
   * A list of MediaPackage VOD PackagingConfiguration resources.
   */
  PackagingConfigurations?: Array<_UnmarshalledPackagingConfiguration>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
